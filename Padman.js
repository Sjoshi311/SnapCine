import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Padman.css";

const Padman = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="padman">
      <img className="image-6-icon3" alt="" src="/image-6@2x.png" />
      <img className="image-40-icon1" alt="" src="/image-40@2x.png" />
      <div className="akshay-kumar3">Akshay Kumar</div>
      <div className="upon-realizing-the">
        Upon realizing the extent to which women are affected by their menses, a
        man sets out to create a sanitary pad machine and to provide inexpensive
        sanitary pads to the women of rural India.
      </div>
      <div className="magestar-fill-parent50">
        <img
          className="magestar-fill-icon53"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div53">7.9</div>
      </div>
      <img className="padman-child" alt="" />
      <b className="snapcine3">SnapCine</b>
      <img className="image-27-icon" alt="" src="/image-27@2x.png" />
      <div className="h-20m">2018 2h 20m</div>
      <b className="padman1">Padman</b>
      <b className="home3" onClick={onHomeTextClick}>
        Home
      </b>
      <b className="starring-leads-3">Starring Leads-</b>
      <img className="image-42-icon" alt="" src="/image-42@2x.png" />
      <div className="radhika-apte">
        <p className="radhika">Radhika</p>
        <p className="radhika">Apte</p>
      </div>
    </div>
  );
};

export default Padman;
