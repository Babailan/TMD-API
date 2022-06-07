import styles from "./poster.module.scss";
import Image from "next/image";

type Props = {
  onClick: (e: any) => void;
  poster_path: string;
  title: string;
};

const Component = ({ onClick, poster_path, title }: Props) => {
  const img = process.env.imageUrl550;
  return (
    <div className={styles.container} onClick={onClick} title={title}>
      <Image
        src={`${img}/${poster_path}`}
        layout={"fill"}
        objectFit={"contain"}
        loading={"lazy"}
        alt={title}
      />
    </div>
  );
};

export default Component;
