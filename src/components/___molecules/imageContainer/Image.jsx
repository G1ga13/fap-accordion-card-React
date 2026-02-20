import "./image.css";
import Isometric from "../../../assets/mention_isometric.png";
import ImageShadow from "../../../assets/ImageShadow.png";

function First() {
  return (
    <div className="image_container">
      <img src={Isometric} alt="isometric" />
      <img className="shadow" src={ImageShadow} alt="shadow" />
    </div>
  );
}

export default First;
