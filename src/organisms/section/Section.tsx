import { FC } from "react";
import Typography from "../../atoms/typography/Typography";
import { Tag } from "../../enums/tag";
import styles from "./section.module.sass";
import Button from "../../atoms/button/Button";

interface Props {
  title: string;
  text: string;
  image: string;
  headline?: string;
  subtitle?: string;
  borderColor?: string;
  onDetailClicked?: () => void;
  type: "left" | "right" | "fullborder";
}

const Section: FC<Props> = ({
  title,
  text,
  image,
  onDetailClicked,
  type,
  borderColor,
  headline,
  subtitle,
}) => {
  return (
    <>
      <div className={styles.topline}>
        <Typography className={styles.headline} type={Tag.h4}>
          {headline}
        </Typography>
        <Typography className={styles.subtitle} type={Tag.p}>
          {subtitle}
        </Typography>
      </div>

      <div
        style={
          type === "left"
            ? { borderTop: `1px solid ${borderColor}` }
            : type === "right"
            ? { borderBottom: `1px solid ${borderColor}` }
            : {
                borderBottom: `1px solid ${borderColor}`,
                borderTop: `1px solid ${borderColor}`,
              }
        }
        className={`${styles.container} ${styles[type]}`}
      >
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <Typography type={Tag.h3}>{title}</Typography>
            <Typography type={Tag.p} size={"large"}>
              {text}
            </Typography>
            <Button onClick={onDetailClicked}>View Details</Button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={image} onClick={onDetailClicked} />
        </div>
        <Typography className={styles.subtitleMobile} type={Tag.p}>
          {subtitle}
        </Typography>
      </div>
    </>
  );
};

export default Section;
