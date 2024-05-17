import Header from "../organisms/header/Header";
import Section from "../organisms/section/Section";
import VideoOverlay from "../organisms/video-overlay/VideoOverlay";
import section1 from "assets/section-1.png";
import styles from "./home.module.sass";

function Home() {
  return (
    <>
      <Header />
      <VideoOverlay />
      <div className={styles.bigSection} id="Gifting">
        <Section
          headline="GIFTING"
          type="left"
          borderColor="#EE7500"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Toys perfect for birthday gift-giving season in Spring"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
        <Section
          type="right"
          borderColor="#EE7500"
          title="Gifts for Mom"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
      <div className={styles.bigSection} id="Travel">
        <Section
          headline="Travel"
          type="left"
          borderColor="#00963E"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Travel the world no matter where you are. No Passport needed."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
        <Section
          type="right"
          borderColor="#00963E"
          title="Fun accessories to take with you on your travels or keep kids entertained"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
      <div className={styles.smallSection} id="Adults">
        <Section
          headline="Adults welcome"
          type="fullborder"
          borderColor="#006CB7"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="For the Kids at Heart who love to unplug, unbox and unwind"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
      <div className={styles.smallSection} id="Art">
        <Section
          headline="Art & Home Décor "
          type="fullborder"
          borderColor="#E0E0E0"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Playful ideas for refreshing your space while tapping into your more creative side"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
      <div className={styles.smallSection} id="Space">
        <Section
          headline="Space"
          type="fullborder"
          borderColor="#000000"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Capture the wonders of space and exploration"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
      <div className={styles.smallSection} id="Pop">
        <Section
          headline="Pop Culture"
          type="fullborder"
          borderColor="#FC36A5"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Recreate scenes from your favorite movies and TV series"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
      <div className={styles.bigSection} id="Toddlers">
        <Section
          headline="Toddlers"
          type="left"
          borderColor="#FFD500"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Waterproof toys for toddlers and beyond"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
        <Section
          type="right"
          borderColor="#FFD500"
          title="xx TBD"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
      <div className={styles.bigSection} id="Real">
        <Section
          headline="Real World Role Playing"
          type="left"
          borderColor="#E3000B"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Celebrating the everyday heroes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
        <Section
          type="right"
          borderColor="#E3000B"
          title="xxxxx TBD"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          image={section1}
        />
      </div>
    </>
  );
}

export default Home;
