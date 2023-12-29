import "./offer.css";
import picnic from "../../assets/picnic.jpg";
const Offer = () => {
  return (
    <>
      <div className="offers__content">
        <div className="text__content">
          <div className="text__image-content">
            <h3>Your home away from home – for your entire extended stay</h3>
            <p>
              Choose from properties that are perfect for working, relaxing, or
              a bit of both
            </p>
            <button>Find a Stay</button>
          </div>
          <img className="imag" src={picnic} alt="" />
        </div>
        <div className="image__content">
          <div className="text__i">
            <h3>The great getaway, your way</h3>
            <p>
              Save at least 15% on stays worldwide, from relaxing retreats to
              off-the-grid adventures
            </p>
            <button>Find Getaway Deals</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
