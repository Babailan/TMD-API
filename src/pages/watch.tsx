import type { GetServerSidePropsContext, NextPage } from "next";
import Watch from "../components/watch";

type props = {
  id: number | string;
};

const Page: NextPage = () => {
  return <Watch />;
};

export default Page;
