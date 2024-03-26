import React, { FC } from "react";
import styles from "./Card.module.scss";

interface ICard {
  link: string;
}

const Card: FC<ICard> = ({ link }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${link})`,
      }}
    ></div>
  );
};

export default Card;
