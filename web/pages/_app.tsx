import "../styles/globals.css";

import type { AppContext } from "next/app";
import App from "next/app";

import { api } from "./api/api";

import ConfigHead from "../src/Infra/ConfigHead";

import ProductsListProvider from "../src/contexts/productsListContext";

import { AuthProvider } from "../src/contexts/AuthContext";

type Props = {
  productsList: any;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const handler = await api.get("/getAll");
    const data = handler.data;

    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      productsList: data,
    };
  }

  render() {
    const { Component, pageProps, productsList } = this.props;

    return (
      <>
        <ConfigHead />

        <ProductsListProvider data={productsList}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ProductsListProvider>
      </>
    );
  }
}

export default MyApp;
