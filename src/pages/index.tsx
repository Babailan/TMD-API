import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Movies from "../components/movies";
import styles from "../styles/home.module.scss";
import { Pagination } from "swiper";
import libs from "../libs";
import HomeSlides from "../components/homeSlides";
import Head from "next/head";

type props = {
  popular: any;
  top_rated: any;
  discoverMovies: any;
  discoverTv: any;
  tv_popular: any;
};

const Home: NextPage = ({
  popular,
  top_rated,
  discoverMovies,
  discoverTv,
  tv_popular,
}: props) => {
  const sliced = popular.results.slice(0, 5);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Head>
        <title>Home</title>
      </Head>
      <HomeSlides styles={styles} sliced={sliced} />
      <Movies data={popular} subject={"Popular Movies"} type={"movie"} />
      <Movies data={top_rated} subject={"Top Rated Movies"} type={"movie"} />
      <Movies data={discoverMovies} subject={"Movie Discover"} type={"movie"} />
      <Movies data={discoverTv} subject={"TV Discover"} type={"tv"} />
      <Movies data={tv_popular} subject={"Popular TV Shows"} type={"tv"} />
    </div>
  );
};

export async function getStaticProps() {
  // fetch data ascending order https://api.themoviedb.org/3/discover/movie?api_key= <<API KEY SHOULD BE PROVIDED HERE>>
  const apiUrl = process.env.apiUrl;
  const popular = await axios.get(`${apiUrl}/movie/popular`, {
    params: {
      api_key: process.env.TMB_APIKEY,
      page: 1,
    },
  });
  const top_rated = await axios.get(`${apiUrl}/movie/top_rated`, {
    params: {
      api_key: process.env.TMB_APIKEY,
      page: 1,
    },
  });

  const discoverMovies = await axios.get(`${apiUrl}/discover/movie`, {
    params: {
      api_key: process.env.TMB_APIKEY,
      page: 1,
    },
  });
  const discoverTv = await axios.get(`${apiUrl}/discover/tv`, {
    params: {
      api_key: process.env.TMB_APIKEY,
      page: 1,
    },
  });
  const tv_popular = await axios.get(`${apiUrl}/tv/popular`, {
    params: {
      api_key: process.env.TMB_APIKEY,
      page: 2,
    },
  });

  return {
    props: {
      popular: popular.data,
      top_rated: top_rated.data,
      discoverMovies: discoverMovies.data,
      discoverTv: discoverTv.data,
      tv_popular: tv_popular.data,
    },
    revalidate: 43200,
  };
}
export default Home;
