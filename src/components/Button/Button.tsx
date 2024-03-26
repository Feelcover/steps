import React, { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  marginRight?: number;
  marginTop?: number;
}

const Button: FC<IButton> = ({ text, marginRight, marginTop }) => {
  return (
    <button
      type="button"
      className={styles.button}
      style={{ marginRight, marginTop }}
    >
      <span className={styles.button__img} />
      {text}
    </button>
  );
};

export default Button;
