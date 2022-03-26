import styles from "./bio.css";
export default function Bio({ image, position, name, email, bio }) {
  return (
    <section className="bio-container">
      <img
        src={image}
        style={image ? { display: "block" } : { display: "none" }}
        alt=""
      />
      <h2>{position && name ? `${position}: ${name}` : ""}</h2>
      <h2>{email ? `Email: ${email}` : ""}</h2>
      <p>{bio ? bio : ""}</p>
    </section>
  );
}
