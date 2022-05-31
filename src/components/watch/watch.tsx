import { useRouter } from "next/router";
import styles from "./watch.module.scss";

const Watch = () => {
  const router = useRouter();
  console.log(router.pathname);
  return <div className={styles.container}></div>;
};

export default Watch;
