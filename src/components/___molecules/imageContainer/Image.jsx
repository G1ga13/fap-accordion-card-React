import "./image.css";
import isometric from "../../../../src/assets/mention_isometric.png";
import imageShadow from "../../../../src/assets/ImageShadow.png";

function First() {
  return (
    <div className="image_container">
      <img src={isometric} alt="isometric" />
      <img className="shadow" src={imageShadow} alt="shadow" />
    </div>
  );
}

export default First;
