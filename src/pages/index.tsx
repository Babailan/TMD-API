import axios from "axios";
import type { NextPage } from "next";
import Movies from "../components/movies";
import UpComing from "../components/upcoming";

type props = {
  popular: any;
  top_rated: any;
  discoverMovies: any;
  discoverTv: any;
  tv_popular: any;
  upcoming: any;
};

const Home: NextPage = ({
  popular,
  top_rated,
  discoverMovies,
  discoverTv,
  tv_popular,
  upcoming,
}: props) => {
  console.log(tv_popular);
  return (
    <>
      <Movies data={popular} subject={"Popular Movies"} />
      <Movies data={top_rated} subject={"Top Rated Movies"} />
      <Movies data={discoverMovies} subject={"Movie Discover"} />
      <Movies data={discoverTv} subject={"TV Discover"} />
      <Movies data={tv_popular} subject={"Popular TV Shows"} />
      <UpComing data={upcoming} />
    </>
  );
};

export async function getServerSideProps() {
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
  const upcoming = await axios.get(`${apiUrl}/movie/upcoming`, {
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
      upcoming: upcoming.data,
    },
  };
}
export default Home;
