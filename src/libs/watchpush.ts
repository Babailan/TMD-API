import Router from "next/router";

const watchpush = (e: { preventDefault: Function }, id: string | number) => {
  e.preventDefault();
  Router.push(`/watch?id=${id}`);
};

export default watchpush;
