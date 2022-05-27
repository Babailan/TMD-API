import styles from "../movies/movies.module.scss";
import Card from "../cards";
type props = {
  data: {
    results: Array<any>;
    pages: any;
  };
};

const UpComing = ({ data }: props) => {
  const imageUrl = process.env.imageUrl;
  return (
    <div className={styles.container} style={{ overflow: "hidden" }}>
      <p style={{ fontSize: "1.3em", marginBottom: "0.5em" }}>
        Upcoming Movies
      </p>
      <div
        style={{
          display: "flex",
          gap: "1em",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.results.map(({ title, backdrop_path, name, id, overview }) => {
          return (
            <Card
              title={title ? title : name}
              url={`${imageUrl}${backdrop_path}`}
              id={id}
              key={id}
              overview={overview ? overview : "No overview."}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpComing;
