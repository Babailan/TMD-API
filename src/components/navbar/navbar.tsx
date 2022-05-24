import type { NextPage } from "next";
import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <h1 className={styles.title}>MOBY</h1>
      </Link>
    </div>
  );
};

export default Navbar;
