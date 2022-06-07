import type { NextApiRequest, NextApiResponse } from "next";
import { axiosFetcher } from "../../libs";

async function NextAPI(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;
  const data = await axiosFetcher(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMB_APIKEY}&language=en-US&query=${q}&page=1&include_adult=false`
  );
  res.send(data);
  res.end();
}

export default NextAPI;
