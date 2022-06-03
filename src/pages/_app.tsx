import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
