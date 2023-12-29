import "./feature.css";
import dublin from "../../assets/dublin.jpeg";
import germany from "../../assets/germany.jpeg";
import reno from "../../assets/reno.jpeg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={dublin} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dubln</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={reno} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={germany} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Germany</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
