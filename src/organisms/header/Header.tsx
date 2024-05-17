import { FC } from "react";
import styles from "./header.module.sass";
import logo from "../../assets/logo.png";
import IconButton from "../../atoms/icon-button/IconButton";
import messageCircle from "assets/message-circle.png";
import shoppingBag from "assets/shoppingbag.png";
import search from "assets/search.png";
import wizardComponent from "assets/wizard-component.png";
import LinkHeaderGroup from "../../molecules/link-header-group/LinkHeaderGroup";
import { useDrawer } from "../../context/drawerContext";

const Header: FC = () => {
  const { toggleDrawer } = useDrawer();
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className={styles.logo} src={logo} />
          <IconButton
            className={styles.categories}
            img={wizardComponent}
            onClick={toggleDrawer}
            orientation="vertical"
          >
            Categories
          </IconButton>
        </div>

        <LinkHeaderGroup />
        <IconButton
          className={styles.contact}
          img={messageCircle}
          orientation="vertical"
        >
          Contact us
        </IconButton>
        <div style={{ display: "flex" }}>
          <IconButton
            className={styles.request}
            img={shoppingBag}
            orientation="vertical"
          >
            Request
          </IconButton>
          <IconButton img={search} orientation="vertical">
            Search
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
