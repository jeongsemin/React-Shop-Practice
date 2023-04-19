import styles from "./Carousel.module.css";
import Jean from "../img/jean.jpg";
import Food from "../img/food.jpg";
import Work from "../img/work.jpg";
import { useState, useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

export default function Carousel() {
  const [count, setCount] = useState(0);

  const nextBtn = () => {
    setCount((count) => (count < 2 ? count + 1 : 0));
  };
  const prevBtn = () => {
    setCount((count) => (count > 0 ? count - 1 : 2));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      nextBtn();
    }, 5000);
    return () => clearTimeout(interval);
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.flexbox}
        style={{ transform: `translateX(${count * -100}% )` }}
      >
        <img src={Jean} />
        <img src={Food} />
        <img src={Work} />
      </div>
      <div className={styles.carousel}>
        <BiLeftArrow className={styles.icon} onClick={prevBtn} />
        <BiRightArrow className={styles.icon} onClick={nextBtn} />
      </div>
    </div>
  );
}
