import { GetServerSidePropsContext, NextPage } from "next";
import { axiosFetcher } from "../libs";
import getGenreId from "../libs/genre";
import { RootObject } from "../interface/genre";
import Genre from "../components/genre";

type Props = {
  data: RootObject;
  type: string;
};

const Page: NextPage = ({ data, type }: Props) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Genre data={data} type={type} />
    </div>
  );
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
  return { props: { data, type: Context.query.type } };
}

export default Page;
