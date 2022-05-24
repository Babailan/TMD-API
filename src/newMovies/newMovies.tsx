import type { NextPage } from "next";
type props = {
  data: any;
};

const NewMovies = ({ data }: props) => {
  console.log(data);
  return <div></div>;
};

export default NewMovies;
