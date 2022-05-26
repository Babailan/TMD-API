import type { GetServerSidePropsContext, NextPage } from "next";
import Watch from "../components/watch";

type props = {
  id: number | string;
};

const Page: NextPage = ({ id }: props) => {
  return <Watch />;
};

export async function getServerSideProps(Context: GetServerSidePropsContext) {
  return {
    props: {
      id: Context.query.id,
    },
  };
}

export default Page;
