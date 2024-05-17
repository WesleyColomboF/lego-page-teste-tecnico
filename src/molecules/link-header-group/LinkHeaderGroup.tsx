import { FC } from "react";
import Typography from "../../atoms/typography/Typography";
import styles from "./link-header-group.module.sass";
import { Tag } from "../../enums/tag";

interface Props {
  className?: string;
}

const LinkHeaderGroup: FC<Props> = ({ className }) => {
  const headerItems: string[] = [
    "Gifting",
    "Travel",
    "Adults Welcome",
    "Art & Home Décor",
    "Space",
    "Pop Culture",
    "Toddlers",
    "Real World Role Playing",
  ];
  return (
    <div className={`${className} ${styles.group}`}>
      {headerItems.map((item) => (
        <Typography type={Tag.p}>{item}</Typography>
      ))}
    </div>
  );
};

export default LinkHeaderGroup;
