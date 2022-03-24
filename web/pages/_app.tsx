import "../styles/globals.css";
import type { AppProps } from "next/app";
import ConfigHead from "../src/Infra/ConfigHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
