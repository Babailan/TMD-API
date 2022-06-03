import type { NextApiRequest, NextApiResponse } from "next";
import { axiosFetcher } from "../../libs";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const tmd_api = process.env.TMB_APIKEY;
    const details = await axiosFetcher(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${tmd_api}&language=en-US`
    );
    let videos = await axiosFetcher(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${tmd_api}&language=en-US`
    );
    let similar = await axiosFetcher(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${tmd_api}&language=en-US`
    );

    videos = videos.results.sort((a: any) => {
      if (a.official) {
        return 1;
      } else {
        return -1;
      }
    });
    res.status(200).send({
      details: details,
      videos: videos,
      similar: similar,
    });
    res.end();
  } catch (err) {
    res.status(err.response.status).send({
      success: false,
      status_code: 34,
      status_message: "The resource you requested could not be found.",
    });
    res.end();
  }
}
