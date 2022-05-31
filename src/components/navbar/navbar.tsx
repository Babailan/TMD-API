import type { NextPage } from "next";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar: NextPage = () => {
  const [absolute, setAbsolute] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setAbsolute(true);
    } else {
      setAbsolute(false);
    }
  }, [router.pathname]);

  return (
    <div
      className={styles.container}
      style={{ position: absolute ? "absolute" : "relative" }}
    >
      <div className={styles.leftcol}>
        <Link href={"/"}>
          <h1 className={styles.title}>MOVIES</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
