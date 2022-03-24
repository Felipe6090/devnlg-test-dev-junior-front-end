import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { useRouter } from "next/router";

import { api } from "../../src/services/api";
import { ISecundaryProductsList } from "../../src/types/apiResponseTypes";

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const data = await api.get(`/takeProduct/${params.product}`);

  return {
    props: {
      productData: data.data,
    },
  };
};

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
    fallback: false,
  };
};

export default function Product({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <h1>{productData.name || productData.nome}</h1>;
}
