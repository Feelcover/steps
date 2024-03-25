import React from "react";
import partnerCard from "../../images/partnerCard.svg";
import persentCard from "../../images/persentCard.svg";
import repostCard from "../../images/repostCard.svg";
import styles from "./Card.module.scss";

const Card = ({ partnerCardItem, persentCardItem, repostCardItem }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${
          (partnerCardItem && partnerCard) ||
          (persentCardItem && persentCard) ||
          (repostCardItem && repostCard)
        })`,
      }}
    ></div>
  );
};

export default Card;
