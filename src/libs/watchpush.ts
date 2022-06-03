import Router from "next/router";
interface params {
  id: number | string;
  type: string;
}
const watchpush = (e: { preventDefault: Function }, params: params) => {
  e.preventDefault();
  Router.push(`/watch?id=${params.id}&type=${params.type}`);
};

export default watchpush;
