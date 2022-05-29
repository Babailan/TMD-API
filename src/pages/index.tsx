import axios from "axios";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Movies from "../components/movies";

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
  console.log(tv_popular);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Swiper
        loop={true}
        centeredSlides={true}
        style={{ height: "100vh", width: "100%" }}
      >
        {popular.results.map(({ title, id, backdrop_path, name, overview }) => {
          if (backdrop_path === null) {
            return;
          }
          return (
            <SwiperSlide key={id}>
              <div style={{ width: "100vw ", display: "flex" }}>{title}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Movies data={popular} subject={"Popular Movies"} />
      <Movies data={top_rated} subject={"Top Rated Movies"} />
      <Movies data={discoverMovies} subject={"Movie Discover"} />
      <Movies data={discoverTv} subject={"TV Discover"} />
      <Movies data={tv_popular} subject={"Popular TV Shows"} />
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
      page: 1,
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
