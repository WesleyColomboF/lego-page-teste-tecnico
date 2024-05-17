import { FC, useRef } from "react";

import Video from "../../atoms/video/Video";
import Typography from "../../atoms/typography/Typography";
import { Tag } from "../../enums/tag";
import styles from "./video-overlay.module.sass";
import ButtonGroup from "../../molecules/button-group/ButtonGroup";
import chevronsDown from "assets/chevrons-down.png";
const VideoOverlay: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.whiteBox}></div>
      <div className={styles.overlay}>
        <Video ref={videoRef} />
        <ButtonGroup className={styles.buttonGroup} />
        <div className={styles.scroll}>
          <Typography size="large" type={Tag.p}>
            Scroll down
          </Typography>
          <img src={chevronsDown} alt="" />
        </div>
      </div>
      <Typography className={styles.title} type={Tag.h1}>
        Welcome to the <br /> Play Matters Interactive Lookbook
      </Typography>
    </div>
  );
};

export default VideoOverlay;
