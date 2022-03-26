import styles from "./gallery.css";
import img1 from "../images/gallery1.jpeg";
import img2 from "../images/gallery2.jpeg";
export default function Gallery() {
  return (
    <div className="gallery-wrapper">
      {" "}
      <section className="images-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </section>
    </div>
  );
}
