import { Link } from "react-router-dom";
import styles from "./header.css";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import hamburger from "../images/hamburger.png";
import soccerball from "../images/soccerball.png";
export default function Header() {
  return (
    <header>
      <section className="upper-header">
        <Link style={{ textDecoration: "none" }} to="/oskyboys/">
          <div className="logo-container">
            <img src={soccerball} alt="soccerball" />
            <h2>Oskaloosa Boys Soccer</h2>
          </div>
        </Link>
        <div className="header-social-media-container">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/groups/748185881954567"
              target="_blank"
            >
              <img src={facebook} alt="facebook-logo" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCQ2O39sHA3CxAlRVKgmoZcQ"
              target="_blank"
            >
              <img src={youtube} alt="youtube-logo" />
            </a>
          </div>
        </div>
      </section>
      <section id="hamburger" className="lower-header">
        <ul className="menu">
          <Link to="/schedule">
            <li>Schedule/Stats</li>
          </Link>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>

          <Link to="/roster">
            <li>Roster</li>
          </Link>
          <Link to="/staff">
            <li>Staff</li>
          </Link>
          <Link to="/downloads">
            <li>Downloads</li>
          </Link>
        </ul>
        {/* <input type="image" src={hamburger} /> */}
      </section>
    </header>
  );
}
