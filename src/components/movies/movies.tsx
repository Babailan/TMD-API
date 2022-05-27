import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../cards";
import styles from "./movies.module.scss";
import "swiper/css";
import { useState } from "react";
import { Navigation } from "swiper";

type props = {
  data: {
    results: Array<any>;
    pages: any;
  };
  subject: string;
};

const Movies = ({ data, subject }: props) => {
  const [change, setChange] = useState<boolean>(false);
  const imageUrl = process.env.imageUrl;
  console.log(data.results);

  const firstMove = () => {
    setChange(true);
  };

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        onSliderFirstMove={firstMove}
        navigation={{
          nextEl: `.${styles.nextEl}`,
          prevEl: `.${styles.prevEl}`,
        }}
        slidesPerView={"auto"}
        className={styles.moviesList}
      >
        <span className={styles.title} slot="container-start">
          {subject}
        </span>
        <span
          unselectable="on"
          className={styles.nextEl}
          onChange={() => {
            if (!change) {
              setChange(true);
            }
          }}
        >
          &gt;
        </span>

        <span
          unselectable="on"
          className={`${styles.prevEl} ${change ? `` : `${styles.hidden}`}`}
        >
          &lt;
        </span>

        {data.results.map(({ title, id, backdrop_path, name, overview }) => {
          if (backdrop_path === null) {
            return;
          }
          return (
            <SwiperSlide key={id}>
              <Card
                title={title ? title : name}
                id={id ? id : ""}
                url={`${imageUrl}${backdrop_path}`}
                overview={overview ? overview : "No overview."}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Movies;
