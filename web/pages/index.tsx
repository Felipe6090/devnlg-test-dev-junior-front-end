import type { NextPage } from "next";
import SrcHome from "../src/screens/SrcHome";

import { api } from "../src/services/api";
import { InferGetStaticPropsType, GetStaticProps } from "next";

import ProductsListProvider from "../src/contexts/productsListContext";

export const getStaticProps: GetStaticProps = async () => {
  const handler = await api.get("/getAll");
  const data = handler.data;

  return {
    props: {
      productsList: data,
    },
  };
};

const Home: NextPage = ({
  productsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ProductsListProvider state={productsList}>
      <SrcHome />
    </ProductsListProvider>
  );
};

export default Home;
