import styles from "./roster.css";
import teamportrait from "../images/gallery1.jpeg";
export default function Roster() {
  return (
    <div className="roster-wrapper" style={{ lineHeight: "1.75" }}>
      <img src={teamportrait} alt="" />
    </div>
  );
}
