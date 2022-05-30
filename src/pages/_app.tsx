import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer";
import "swiper/css";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
