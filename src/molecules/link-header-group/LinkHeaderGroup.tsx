import { FC } from "react";
import Typography from "../../atoms/typography/Typography";
import styles from "./link-header-group.module.sass";
import { Tag } from "../../enums/tag";
import { Link } from "react-scroll";
import AnimatedContainer from "../../atoms/animated-container/AnimatedContainer";
import { useDrawer } from "../../context/drawerContext";
interface Props {
  className?: string;
  isOnsDrawer?: boolean;
}

const LinkHeaderGroup: FC<Props> = ({ className, isOnsDrawer }) => {
  const headerItems: { label: string; to: string }[] = [
    { label: "Gifting", to: "Gifting" },
    { label: "Travel", to: "Travel" },
    { label: "Adults Welcome", to: "Adults" },
    { label: "Art & Home Décor", to: "Art" },
    { label: "Space", to: "Space" },
    { label: "Pop Culture", to: "Pop" },
    { label: "Toddlers", to: "Toddlers" },
    { label: "Real World Role Playing", to: "Real" },
  ];
  const { toggleDrawer } = useDrawer();
  return (
    <div
      className={`${className} ${
        !isOnsDrawer ? styles.group : styles.groupDrawer
      }`}
    >
      {headerItems.map((item) =>
        isOnsDrawer ? (
          <AnimatedContainer key={item.to}>
            <Link
              onClick={toggleDrawer}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
            >
              <Typography type={Tag.p}>{item.label}</Typography>
            </Link>
          </AnimatedContainer>
        ) : (
          <Link to={item.to} spy={true} smooth={true} duration={500}>
            <Typography type={Tag.p}>{item.label}</Typography>
          </Link>
        )
      )}
    </div>
  );
};

export default LinkHeaderGroup;
