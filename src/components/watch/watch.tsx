import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../cards";
import styles from "./watch.module.scss";

const Watch = ({ videos, details, similar }) => {
  const img = process.env.imageUrl550;
  const { type } = useRouter().query;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {details.title ? details.title : details.name}
      </h2>
      {videos.length > 0 ? (
        <iframe
          className={styles.video}
          typeof="text/html"
          src={`https://www.youtube.com/embed/${videos[0].key}`}
          frameBorder={0}
        ></iframe>
      ) : (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#000",
            minHeight: "70vh",
          }}
        >
          No available video
        </h1>
      )}

      <div className={styles.information}>
        <div className={styles.poster}>
          <Image
            src={`${img}/${details.poster_path}`}
            layout={"fill"}
            objectFit={"contain"}
            alt={details.title ? details.title : details.name}
          />
        </div>
        <div className={styles.many_text}>
          <p className={styles.overview}>{details.overview}</p>
          <p>
            {details.genres.map(({ name, id }, index: number) => {
              if (index === details.genres.length - 1) {
                return <span key={id}>{name}</span>;
              }
              return (
                <span key={id} style={{ marginRight: "5px" }}>
                  {name + ","}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <div className={styles.suggestions}>
        <h3>Suggestions</h3>
        <div className={styles.suggestionlist}>
          {similar.results.map(({ poster_path, id, title, name }) => {
            if (!poster_path) {
              return;
            }
            return (
              <Card
                id={id}
                type={type}
                key={id}
                url={poster_path}
                title={title ? title : name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Watch;
