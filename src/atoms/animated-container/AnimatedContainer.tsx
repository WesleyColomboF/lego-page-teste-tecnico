import { FC, ReactNode } from "react";
import styles from "./animated-container.module.sass";

const AnimatedContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AnimatedContainer;
