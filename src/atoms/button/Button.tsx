import { FC, ReactNode } from "react";
import styles from "./button.module.sass";
import arrowRight from "assets/arrow-right.png";

interface Props {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={`${styles.button}  ${className}`} onClick={onClick}>
      {children} <img src={arrowRight} />
    </button>
  );
};

export default Button;
