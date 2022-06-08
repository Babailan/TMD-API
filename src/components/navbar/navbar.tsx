import Link from "next/link";
import styles from "./navbar.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import genre from "../../json/genre";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";
import { browserFetcher } from "../../libs";

const Navbar = ({ visible, setVisible }) => {
  const [absolute, setAbsolute] = useState<boolean>(false);
  const [list] = useState({ genre });
  const router = useRouter();
  const [search, setSearch] = useState({ text: "", data: {} });
  const [showMobileBar, setMobileBar] = useState<boolean>(false);

  const { data } = useSWR(
    search.text.length > 0 && `/api/search?q=${search.text}`,
    browserFetcher
  );

  useEffect(() => {
    if (router.pathname === "/") {
      setAbsolute(true);
    } else {
      setAbsolute(false);
    }
  }, [router.pathname]);

  const onChange = (e: any) => {
    setSearch((p) => {
      return { ...p, data: data, text: e.target.value };
    });
  };

  return (
    <div
      className={styles.container}
      style={{ position: absolute ? "absolute" : "relative" }}
    >
      <div className={styles.leftcol}>
        <div className={styles.fabars}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setMobileBar((p) => !p)}
          />
          {showMobileBar && (
            <div className={styles.geneticsLOL}>
              <h3>Movies</h3>
              <hr />
              <div className={styles.list}>
                {list.genre.map(({ name }, index) => (
                  <p
                    key={index}
                    style={{
                      fontWeight:
                        router.query.v === name && router.query.type === "movie"
                          ? "900"
                          : "",
                      color:
                        router.query.v === name && router.query.type === "movie"
                          ? "rgb(0, 162, 255)"
                          : "#fff",
                    }}
                    onClick={() => {
                      setMobileBar(false);
                      router.push(`/genre?v=${name}&type=movie`);
                    }}
                  >
                    {name}
                  </p>
                ))}
              </div>
              <h3 className={styles.notFirst}>TV Shows</h3>
              <hr />
              <div className={styles.list}>
                {list.genre.map(({ name }, index) => (
                  <p
                    key={index}
                    style={{
                      fontWeight:
                        router.query.v === name && router.query.type === "tv"
                          ? "900"
                          : "",
                      color:
                        router.query.v === name && router.query.type === "tv"
                          ? "rgb(0, 162, 255)"
                          : "#fff",
                    }}
                    onClick={() => {
                      setMobileBar(false);
                      router.push(`/genre?v=${name}&type=tv`);
                    }}
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link href={"/"}>
          <h1 className={styles.title}>UNTITLED</h1>
        </Link>
        <div className={styles.afterTitle}>
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
              {list.genre.map(({ name }, index) => (
                <p
                  key={index}
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
              {list.genre.map(({ name }, index) => (
                <p
                  key={index}
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
      <div className={styles.rightcol}>
        <FontAwesomeIcon
          size={"lg"}
          icon={faSearch}
          onClick={() => setVisible(true)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
