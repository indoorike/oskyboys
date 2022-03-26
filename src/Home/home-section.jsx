import { Link } from "react-router-dom";
export default function HomeSection({ backgroundImage, sectionHeader, link }) {
  return (
    <section className="home-section">
      <h1>{sectionHeader}</h1>
      <img src={backgroundImage} alt="bannerimage" />
      <Link to={link}>
        <input
          type="button"
          value={sectionHeader}
          className="home-section-action-btn"
        />
      </Link>
    </section>
  );
}
