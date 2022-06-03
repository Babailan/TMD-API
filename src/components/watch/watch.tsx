import Image from "next/image";
import styles from "./watch.module.scss";

const Watch = ({ videos, details, similar }) => {
  const img = process.env.imageUrl1280;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {details.title ? details.title : details.name}
      </h2>
      <iframe
        className={styles.video}
        typeof="text/html"
        src={`https://www.youtube.com/embed/${videos[0].key}`}
        frameBorder={0}
      ></iframe>
      <div className={styles.information}>
        <div className={styles.poster}>
          <Image
            src={`${img}/${details.poster_path}`}
            layout={"fill"}
            objectFit={"contain"}
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
    </div>
  );
};

export default Watch;
