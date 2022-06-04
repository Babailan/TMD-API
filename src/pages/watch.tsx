import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import Watch from "../components/watch";
import { browserFetcher } from "../libs";

const Page: NextPage = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id &&
      `/api/watch?id=${router.query.id}&type=${router.query.type}`,
    browserFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  if (error) {
    return (
      <h1
        style={{
          padding: "1em",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {"The resource you requested could not be found."}
      </h1>
    );
  }

  if (data) {
    return (
      <>
        <Head>
          <title>{data.details.title}</title>
        </Head>
        <Watch
          videos={data.videos}
          similar={data.similar}
          details={data.details}
        />
      </>
    );
  }

  return <div style={{ minHeight: "100vh" }}></div>;
};

export default Page;
