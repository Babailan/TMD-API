import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
