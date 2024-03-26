import { useMediaQuery } from "@/src/hooks/useWindowWidth";
import React, { FC } from "react";
import styles from "./Card.module.scss";

interface ICard {
  partnerCard?: boolean;
  repostCard?: boolean;
  persentCard?: boolean;
  marginTop?: number;
}

const Card: FC<ICard> = ({ partnerCard, repostCard, persentCard, marginTop }) => {
  const isMobile = useMediaQuery(1130);
  let partnerCardItem = isMobile
    ? "../../images/partnerCardMob.svg"
    : "../../images/partnerCard.svg";
  let repostCardItem = isMobile
    ? "../../images/repostCardMob.svg"
    : "../../images/repostCard.svg";
  let persentCardItem = isMobile
    ? "../../images/persentCardMob.svg"
    : "../../images/persentCard.svg";

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${
          (partnerCard && partnerCardItem) ||
          (repostCard && repostCardItem) ||
          (persentCard && persentCardItem)
        })`,
        marginTop
      }}
    ></div>
  );
};

export default Card;
