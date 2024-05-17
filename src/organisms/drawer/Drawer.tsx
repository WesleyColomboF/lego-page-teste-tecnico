import { FC, RefObject } from "react";
import styles from "./drawer.module.sass";
import IconButton from "../../atoms/icon-button/IconButton";
import messageCircle from "assets/message-circle.png";
import shoppingBag from "assets/shoppingbag.png";
import home from "assets/home.png";
import logo from "assets/logo.png";
import { useDrawer } from "../../context/drawerContext";
import { Link } from "react-scroll";
import close from "assets/close.png";
import LinkHeaderGroup from "../../molecules/link-header-group/LinkHeaderGroup";
import Typography from "../../atoms/typography/Typography";
import { Tag } from "../../enums/tag";
import drawerLogo1 from "assets/drawer-logo-1.png";
import drawerLogo2 from "assets/drawer-logo-2.png";
import drawerLogo3 from "assets/drawer-logo-3.png";
import drawerLogo4 from "assets/drawer-logo-4.png";
import drawerLogo5 from "assets/drawer-logo-5.png";
import drawerLogo6 from "assets/drawer-logo-6.png";
import drawerLogo7 from "assets/drawer-logo-7.png";
import drawerLogo8 from "assets/drawer-logo-8.png";
import drawerLogo9 from "assets/drawer-logo-9.png";

const drawerLogos = [
  drawerLogo1,
  drawerLogo2,
  drawerLogo3,
  drawerLogo4,
  drawerLogo5,
  drawerLogo6,
  drawerLogo7,
  drawerLogo8,
  drawerLogo9,
];

const Drawer: FC<{ forwardRef: RefObject<HTMLDivElement> }> = () => {
  const { isOpen, toggleDrawer } = useDrawer();
  return (
    <div
      className={`${styles.wrapper} ${
        isOpen ? `${styles.down} ${styles.show}` : `${styles.up} ${styles.hide}`
      }`}
    >
      <div className={styles.container}>
        <div className={styles.buttons}>
          <div className={styles.buttonGroup}>
            <Link
              className={styles.logo}
              to="video"
              onClick={toggleDrawer}
              smooth={true}
              duration={1000}
            >
              <img src={logo} />
            </Link>
            <img src={close} onClick={toggleDrawer} alt="close" />
          </div>

          <IconButton
            img={home}
            onClick={toggleDrawer}
            orientation="horizontal"
          >
            Home
          </IconButton>

          <IconButton
            className={styles.request}
            img={shoppingBag}
            orientation="horizontal"
          >
            Request
          </IconButton>
          <IconButton
            className={styles.contact}
            img={messageCircle}
            orientation="horizontal"
          >
            Contact us
          </IconButton>
        </div>

        <div className={styles.links}>
          <div className={styles.divider}>
            <hr />
            <Typography type={Tag.p}>Themes</Typography>
          </div>
          <LinkHeaderGroup isOnsDrawer />
        </div>
        {drawerLogos.map((logo) => (
          <div className={styles.logoContainer}>
            <img src={logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
