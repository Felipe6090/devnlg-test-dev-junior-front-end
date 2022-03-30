import { GetStaticPaths, GetStaticProps } from "next";
import ProfilePage from "../../src/screens/ProfilePage";

import { api } from "../api/api";
import { IUserData } from "../../src/types/userDataType";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get("/getAllusers");

  const data: IUserData[] = res.data;
  
  const paths = data.map((userData) => {
    const param = userData.id;

    return {
      params: {
        profile: param,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { profile } = context.params!;

  return {
    props: {
      productData: profile,
    },
  };
};

export default function Profile() {
  return <ProfilePage />;
}
