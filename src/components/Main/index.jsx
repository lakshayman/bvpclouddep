import "./index.css";
import mainImage from "../../assets/cloudMain.jpg";

export default () => {
  return (
    <div className="Main">
      <img className="Main__image" src={mainImage} alt="mainimage" />
      <div className="Main__textContainer">
        <div className="Main__text">Cloud Research Lab</div>
        <div className="Main__text">IT Department</div>
      </div>
    </div>
  );
};
