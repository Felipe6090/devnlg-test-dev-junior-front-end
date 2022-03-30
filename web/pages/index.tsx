import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import nookies from "nookies";
import { useContext, useEffect } from "react";
import { AuthContext } from "../src/contexts/AuthContext";

import SrcHome from "../src/screens/SrcHome";

import { api } from "./api/api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { auth_token: tokenId } = nookies.get(context);

  if (!tokenId) {
    return {
      props: {
        userData: null,
      },
    };
  }

  const result = await api.post("/getUserData", { tokenId });

  const data = await result.data;

  return {
    props: {
      userData: data,
    },
  };
};

const Home: NextPage = ({
  userData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { setAuthData } = useContext(AuthContext);

  useEffect(() => {
    setAuthData(userData);
  }, []);

  return <SrcHome />;
};

export default Home;
