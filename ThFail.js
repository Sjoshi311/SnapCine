import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ThFail.css";

const ThFail = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="th-fail">
      <img className="image-6-icon7" alt="" src="/image-6@2x.png" />
      <div className="the-real-life-story">
        The real-life story of IPS Officer Manoj Kumar Sharma and IRS Officer
        Shraddha Joshi.
      </div>
      <div className="magestar-fill-parent54">
        <img
          className="magestar-fill-icon57"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div57">9.0</div>
      </div>
      <img className="th-fail-child" alt="" />
      <b className="snapcine7">SnapCine</b>
      <img className="image-25-icon" alt="" src="/image-25@2x.png" />
      <b className="th-fail1">12th Fail</b>
      <div className="h-27m">2023 2h 27m</div>
      <b className="home7" onClick={onHomeTextClick}>
        Home
      </b>
      <img className="image-48-icon" alt="" src="/image-48@2x.png" />
      <div className="vikrant-massey">Vikrant Massey</div>
      <b className="starring-leads-7">Starring Leads-</b>
      <img className="image-49-icon" alt="" src="/image-49@2x.png" />
      <div className="medha-shankr">Medha Shankr</div>
    </div>
  );
};

export default ThFail;
