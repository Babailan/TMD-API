import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useSWR from "swr";
import { browserFetcher, watchpush } from "../../libs";
import styles from "./results.module.scss";
import { Result } from "../../interface/genre";
import Poster from "../poster";

export default ({ setVisible }) => {
  const [search, setSearch] = useState({ text: "", data: {} });
  const { data } = useSWR(
    search.text.length > 0 && `/api/search?q=${search.text}`,
    browserFetcher
  );
  const onChange = (e: any) => {
    setSearch((p) => {
      return { ...p, data: data, text: e.target.value };
    });
  };
  return (
    <div className={`${styles.Result} `}>
      <div className={styles.inputContainer}>
        <h3 className={styles.goback} onClick={() => setVisible(false)}>
          Go Back
        </h3>
        <label style={{ cursor: "pointer" }}>
          <FontAwesomeIcon size={"lg"} icon={faSearch} />
          <input
            onChange={onChange}
            className={styles.input}
            placeholder="Search"
            required
          ></input>
        </label>
      </div>
      <div className={styles.list}>
        {data &&
          data.results.map(
            ({ title, name, poster_path, id, media_type }: Result) => {
              if (!poster_path) return;
              return (
                <div className={styles.card} key={id}>
                  <Poster
                    poster_path={poster_path}
                    title={title ? title : name}
                    onClick={(e) => {
                      setVisible(false);
                      setSearch({ text: "", data: {} });
                      watchpush(e, { id: id, type: media_type });
                    }}
                  />
                  <span
                    className={styles.title}
                    onClick={(e) => {
                      setVisible(false);
                      setSearch({ text: "", data: {} });
                      watchpush(e, { id: id, type: media_type });
                    }}
                    title={title}
                  >
                    {title ? title : name}
                  </span>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};
