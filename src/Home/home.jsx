import styles from "./home.css";
import HomeSection from "./home-section";
import banner1 from "../images/banner1.jpeg";
import banner2 from "../images/banner2.jpeg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpeg";
export default function Home() {
  return (
    <div className="home">
      <HomeSection
        backgroundImage={banner1}
        sectionHeader="2022 Schedule/Stats"
        link="/schedule"
      />
      <HomeSection
        backgroundImage={banner2}
        sectionHeader="Photo Gallary"
        link="/gallery"
      />
      <HomeSection
        backgroundImage={banner4}
        sectionHeader="2022 Roster"
        link="/roster"
      />
      <HomeSection
        backgroundImage={banner3}
        sectionHeader="Downloads"
        link="/downloads"
      />
    </div>
  );
}
