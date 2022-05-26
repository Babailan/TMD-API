import axios from "axios";
import type { NextPage } from "next";
import Movies from "../components/movies";

type props = {
  popular: any;
};

const Home: NextPage = ({ popular }: props) => {
  return <Movies data={popular} subject={"Popular Movies"} />;
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
  return {
    props: { popular: popular.data },
  };
}
export default Home;
