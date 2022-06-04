import styles from "./poster.module.scss";
import Image from "next/image";
const Component = ({ poster_path }) => {
  const img = process.env.imageUrl550;
  return (
    <div className={styles.poster}>
      <Image
        src={`${img}/${poster_path}`}
        layout={"fill"}
        objectFit={"contain"}
      />
    </div>
  );
};

export default Component;
