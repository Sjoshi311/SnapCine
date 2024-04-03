import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Omg.css";

const Omg = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="omg-2">
      <img className="image-6-icon" alt="" src="/image-6@2x.png" />
      <div className="an-unhappy-civilian">
        An unhappy civilian asks the court to mandate comprehensive education in
        schools in a dramatic yet amusing courtroom play.
      </div>
      <div className="magestar-fill-parent47">
        <img
          className="magestar-fill-icon50"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div50">7.6</div>
      </div>
      <img className="omg-2-child" alt="" />
      <b className="snapcine">SnapCine</b>
      <img className="image-23-icon" alt="" src="/image-23@2x.png" />
      <div className="h-36m">2023 2h 36m</div>
      <b className="omg-21">OMG 2</b>
      <b className="home" onClick={onHomeTextClick}>
        Home
      </b>
      <img className="image-40-icon" alt="" src="/image-40@2x.png" />
      <b className="starring-leads-">Starring Leads-</b>
      <img className="image-41-icon" alt="" src="/image-41@2x.png" />
      <div className="akshay-kumar2">Akshay Kumar</div>
      <div className="pankaj-tripathi">
        <p className="pankaj">Pankaj</p>
        <p className="pankaj">Tripathi</p>
      </div>
    </div>
  );
};

export default Omg;
