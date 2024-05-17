import { FC, RefObject } from "react";
import video from "assets/video.mp4";
import videoogg from "assets/video.ogg";
import styles from "./video.module.sass";

interface Props {
  ref: RefObject<HTMLVideoElement>;
}

const Video: FC<Props> = ({ ref }) => {
  return (
    <video ref={ref} className={styles.video} loop autoPlay muted>
      <source src={video} type="video/mp4" />
      <source src={videoogg} type="video/ogg" />
    </video>
  );
};

export default Video;
