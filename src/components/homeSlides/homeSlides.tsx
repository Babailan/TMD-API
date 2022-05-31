import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import libs from "../../libs";

const HomeSlides = ({ styles, sliced }) => {
  return (
    <Swiper
      loop={true}
      className={styles.container}
      pagination={{ clickable: true, type: "bullets" }}
      modules={[Pagination]}
      grabCursor={true}
      autoplay={{ delay: 5000 }}
    >
      {sliced.map(({ title, id, backdrop_path, overview }) => {
        if (backdrop_path === null) {
          return;
        }
        return (
          <SwiperSlide className={styles.slides} key={id}>
            <Image
              src={`${process.env.imageUrl}${backdrop_path}`}
              layout={"fill"}
              objectFit={"cover"}
            />
            <div className={styles.blackBottom}></div>
            <div className={styles.blackTop}></div>
            <div className={styles.aboutSlide}>
              <h1>{title}</h1>
              <p>{overview}</p>
              <button onClick={(e) => libs.watchpush(e, id)}>Watch Now</button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlides;
