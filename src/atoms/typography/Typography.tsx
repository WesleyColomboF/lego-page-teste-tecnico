import { FC, ReactNode } from "react";
import { Tag } from "../../enums/tag";
import { returnTag } from "../../utils/conditional-tag-util";
import styles from "./typography.module.sass";

interface Props {
  type: Tag;
  children: ReactNode;
  size?: "smaller" | "small" | "medium" | "large";
  className?: string;
}

const Typography: FC<Props> = ({ type, children, size, className }) => {
  return (
    <div
      className={`${styles.typography} ${
        styles[size || "medium"]
      } ${className} `}
    >
      {returnTag(type, children)}
    </div>
  );
};

export default Typography;
