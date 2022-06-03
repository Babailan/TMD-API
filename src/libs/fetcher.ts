import axios from "axios";

const axiosFetcher = (url: string | any) =>
  axios.get(url).then((res) => {
    return res.data;
  });

const browserFetcher = (url: string | any) =>
  fetch(url).then((res) => {
    if (res.status >= 400)
      throw Error("The resource you requested could not be found.");
    return res.json();
  });

export { axiosFetcher, browserFetcher };
const all = {
  axiosFetcher,
  browserFetcher,
};

export default all;
