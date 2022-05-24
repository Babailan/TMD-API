import axios from "axios";
import type { NextPage } from "next";
import NewMovies from "../newMovies";

import styles from "../styles/Home.module.scss";
type props = {
  discover: any;
};
const Home: NextPage = ({ discover }: props) => {
  return (
    <div className={styles.container}>
      <NewMovies data={discover} />
    </div>
  );
};

export async function getServerSideProps() {
  // fetch data ascending order https://api.themoviedb.org/3/discover/movie?api_key= <<API KEY SHOULD BE PROVIDED HERE>>
  const discover_movie = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        api_key: process.env.TMB_APIKEY,
        include_adult: false,
        include_video: false,
        page: 1,
        sort_by: "release_date.asc",
      },
    }
  );
  return {
    props: { discover: discover_movie.data },
  };
}
export default Home;
