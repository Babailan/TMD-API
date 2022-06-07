import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import { useState } from "react";
import Result from "../components/results";

function MyApp({ Component, pageProps }: AppProps) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Untitled</title>
      </Head>
      {!visible && <Navbar visible={visible} setVisible={setVisible} />}
      {visible && <Result setVisible={setVisible} />}
      {!visible && <Component {...pageProps} />}

      {!visible && <Footer />}
    </>
  );
}

export default MyApp;
