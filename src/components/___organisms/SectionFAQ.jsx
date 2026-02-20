import "./SectionFAQ.css";
import First from "../___molecules/imageContainer/Image";
import Text from "../___molecules/textContainer/TextBox";
import MobileIsometric from "../../assets/mobileIsometric.png";

function Section() {
  return (
    <div className="section">
      <div className="responsive_image">
        <img src={MobileIsometric} alt="isometric" />
      </div>
      <First />
      <Text />
    </div>
  );
}

export default Section;
