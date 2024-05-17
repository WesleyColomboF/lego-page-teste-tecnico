import { FC } from "react";
import styles from "./circle-button.module.sass";

interface Props {
  onClick?: () => void;
  img?: string;
  className?: string;
}

const CircleButton: FC<Props> = ({ img, onClick, className }) => {
  return (
    <button className={`${styles.button}  ${className}`} onClick={onClick}>
      <img src={img} />
    </button>
  );
};

export default CircleButton;
