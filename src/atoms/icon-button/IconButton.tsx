import { FC, ReactNode } from "react";
import styles from "./icon-button.module.sass";
import Typography from "../typography/Typography";
import { Tag } from "../../enums/tag";
import AnimatedContainer from "../animated-container/AnimatedContainer";

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
  const button = (
    <button
      className={`${styles.button}  ${styles[orientation || "vertical"]}`}
      onClick={onClick}
    >
      <img src={img} />
      <Typography type={orientation === "horizontal" ? Tag.h4 : Tag.p}>
        {children}
      </Typography>
    </button>
  );
  return orientation === "horizontal" ? (
    <AnimatedContainer>{button}</AnimatedContainer>
  ) : (
    <div className={className}>{button}</div>
  );
};

export default IconButton;
