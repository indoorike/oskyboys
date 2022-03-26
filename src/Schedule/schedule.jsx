import styles from "./schedule.css";
import historicalStats from "../images/stats-1.png";
import schedule2022 from "../images/schedule.jpeg";
export default function Schedule() {
  return (
    <div className="schedule">
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>2022 Schedule</h1>
      <section className="schedule-download">
        <a target="_blank" href={schedule2022}>
          <img src={schedule2022} />
        </a>
      </section>
      <section className="stats">
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
          Historical Stats
        </h1>
        <img src={historicalStats} />
      </section>
    </div>
  );
}
