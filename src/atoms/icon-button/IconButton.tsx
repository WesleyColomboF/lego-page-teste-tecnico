import { FC, ReactNode } from "react";
import styles from "./icon-button.module.sass";
import Typography from "../typography/Typography";
import { Tag } from "../../enums/tag";

interface Props {
  img: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  orientation?: "horizontal" | "vertical";
}

const IconButton: FC<Props> = ({
  img,
  children,
  onClick,
  orientation,
  className,
}) => {
  return (
    <button
      className={`${styles.button}  ${
        styles[orientation || "vertical"]
      } ${className}`}
      onClick={onClick}
    >
      <img src={img} />
      <Typography size="smaller" type={Tag.p}>
        {children}
      </Typography>
    </button>
  );
};

export default IconButton;
