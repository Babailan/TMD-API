import styles from "./poster.module.scss";
import Image from "next/image";

const Component = ({ onClick, poster_path }) => {
  const img = process.env.imageUrl550;
  return (
    <div className={styles.container} onClick={onClick}>
      <Image
        src={`${img}/${poster_path}`}
        layout={"fill"}
        objectFit={"contain"}
        loading={"lazy"}
      />
    </div>
  );
};

export default Component;
