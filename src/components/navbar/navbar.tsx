import type { NextPage } from "next";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Router from "next/router";
import { useEffect, useState } from "react";

const Navbar: NextPage = () => {
  const [absolute, setAbsolute] = useState<boolean>(false);

  useEffect(() => {
    console.log(Router.pathname);
    if (Router.pathname === "/") {
      setAbsolute(true);
    }
  }, []);

  if (!absolute) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.leftcol}>
        <Link href={"/"}>
          <h1 className={styles.title}>MOVIES</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
