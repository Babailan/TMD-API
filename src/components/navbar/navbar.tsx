import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";

const Navbar: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftcol}>
        <Link href={"/"}>
          <h1 className={styles.title}>MOVIES</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
