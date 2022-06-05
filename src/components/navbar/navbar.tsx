import type { NextPage } from "next";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import genre from "../../json/genre";

const Navbar: NextPage = () => {
  const [absolute, setAbsolute] = useState<boolean>(false);
  const [list] = useState({ genre, visible: false });
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
          <h1 className={styles.title}>UNTITLED</h1>
        </Link>
        <div className={styles.afterTitle}>
          <p
            className={`${router.pathname === "/" ? styles.bold : ""} ${
              styles.name
            }`}
          >
            Home
          </p>
          <div className={styles.genreContainer}>
            <p
              className={`${
                router.pathname === "/genre" && router.query.type === "movie"
                  ? styles.bold
                  : ""
              } ${styles.name}`}
            >
              Movies
            </p>
            <div className={styles.genreList}>
              {list.genre.map(({ name }) => (
                <p
                  className={
                    router.query.v === name && router.query.type === "movie"
                      ? styles.bold
                      : ""
                  }
                  onClick={() => router.push(`/genre?v=${name}&type=movie`)}
                >
                  {name}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.genreContainer}>
            <p
              className={`${
                router.pathname === "/genre" && router.query.type === "tv"
                  ? styles.bold
                  : ""
              } ${styles.name}`}
            >
              TV Shows
            </p>
            <div className={styles.genreList}>
              {list.genre.map(({ name }) => (
                <p
                  className={
                    router.query.v === name && router.query.type === "tv"
                      ? styles.bold
                      : ""
                  }
                  onClick={() => router.push(`/genre?v=${name}&type=tv`)}
                >
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
