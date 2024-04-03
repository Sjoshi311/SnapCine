import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Hichki.css";

const Hichki = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="hichki">
      <img className="image-6-icon5" alt="" src="/image-6@2x.png" />
      <img className="image-50-icon" alt="" src="/image-50@2x.png" />
      <div className="rani-mukherjee">
        <p className="rani">Rani</p>
        <p className="rani">Mukherjee</p>
      </div>
      <b className="starring-leads-5">Starring Leads-</b>
      <img className="image-51-icon" alt="" src="/image-51@2x.png" />
      <div className="rohit-saraf">
        <p className="rani">Rohit</p>
        <p className="rani">Saraf</p>
      </div>
      <div className="suffering-from-tourette">
        Suffering from Tourette Syndrome, Naina gets assigned a class of defiant
        students and must ensure that her students realise their potential.
      </div>
      <div className="magestar-fill-parent52">
        <img
          className="magestar-fill-icon55"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div55">7.5</div>
      </div>
      <img className="hichki-child" alt="" />
      <b className="snapcine5">SnapCine</b>
      <img className="image-31-icon" alt="" src="/image-31@2x.png" />
      <div className="h-56m">2018 1h 56m</div>
      <b className="hichki1">Hichki</b>
      <b className="home5" onClick={onHomeTextClick}>
        Home
      </b>
    </div>
  );
};

export default Hichki;
