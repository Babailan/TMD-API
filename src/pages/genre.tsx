import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Poster from "../components/poster";
import { axiosFetcher } from "../libs";
import getGenreId from "../libs/genre";
type props = {
  data: any;
};
const Page: NextPage = ({ data }: props) => {
  console.log(data);
  return <></>;
};

export async function getServerSideProps(Context: GetServerSidePropsContext) {
  const tmdb_api = process.env.TMB_APIKEY;
  let genres = await axiosFetcher(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdb_api}&language=en-US`
  );
  genres = genres.genres;
  const genreId = getGenreId(Context.query.v, genres);
  const data = await axiosFetcher(
    `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`
  );
  return { props: { data } };
}

export default Page;
