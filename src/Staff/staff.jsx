import styles from "./staff.css";
import greg from "../images/greg.jpeg";
import Bio from "../SharedComponents/bio";
export default function Staff() {
  return (
    <div className="staff-bios">
      <Bio
        position="Head Coach"
        name="Greg Walter"
        image={greg}
        email="Coachgwalter@gmail.com"
      />
      <Bio
        position="Assistant Coach"
        name="Quintin Plate"
        // image={greg}
        // email="Coachgwalter@gmail.com"
      />
    </div>
  );
}
