import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import ProductItemProvider from "../../src/contexts/productItemContext";

import ProductPage from "../../src/screens/ProductPage";

import { api } from "../../src/services/api";
import { ISecundaryProductsList } from "../../src/types/apiResponseTypes";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get("/secundaryGetAll");

  const data: ISecundaryProductsList = res.data;

  const paths = data.map((product) => {
    const param = product.nome || product.name;

    return {
      params: {
        product: param.replace(/\s/g, "-"),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { product } = context.params!;

  const data = await api.get(`/takeProduct/${product}`);

  return {
    props: {
      productData: data.data,
    },
  };
};

export default function Product({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ProductItemProvider state={productData}>
      <ProductPage />
    </ProductItemProvider>
  );
}
