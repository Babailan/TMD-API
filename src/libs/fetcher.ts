import axios from "axios";

const axiosFetcher = (url: string | any) =>
  axios.get(url).then((res) => res.data);

const browserFetcher = (url: string | any) =>
  fetch(url).then((res) => res.json());

export { axiosFetcher, browserFetcher };
const all = {
  axiosFetcher,
  browserFetcher,
};

export default all;
