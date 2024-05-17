import { FC } from "react";
import CircleButton from "../../atoms/circle-button/CircleButton";
import volume from "assets/volume.png";
import download from "assets/download.png";
import styles from "./button-group.module.sass";

interface Props {
  className?: string;
  onVolumeClick?: () => void;
  onDownloadClick?: () => void;
}

const ButtonGroup: FC<Props> = ({
  className,
  onVolumeClick,
  onDownloadClick,
}) => {
  return (
    <div className={`${className} ${styles.group}`}>
      <CircleButton
        className={styles.volume}
        onClick={onVolumeClick}
        img={volume}
      />
      <CircleButton
        className={styles.download}
        onClick={onDownloadClick}
        img={download}
      />
    </div>
  );
};

export default ButtonGroup;
