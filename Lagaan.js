import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Lagaan.css";

const Lagaan = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="lagaan">
      <img className="image-6-icon6" alt="" src="/image-6@2x.png" />
      <b className="home6" onClick={onHomeTextClick}>
        Home
      </b>
      <div className="the-people-of">
        The people of a small village in Victorian India stake their future on a
        game of cricket against their ruthless British rulers.
      </div>
      <div className="magestar-fill-parent53">
        <img
          className="magestar-fill-icon56"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div56">8.1</div>
      </div>
      <img className="lagaan-child" alt="" />
      <b className="snapcine6">SnapCine</b>
      <img className="image-33-icon" alt="" src="/image-33@2x.png" />
      <div className="h-44m">2001 3h 44m</div>
      <b className="lagaan-once-upon">Lagaan: Once Upon a Time in India</b>
      <img className="image-43-icon2" alt="" src="/image-43@2x.png" />
      <div className="amir-khan">
        <p className="khan">Amir</p>
        <p className="khan">Khan</p>
      </div>
      <b className="starring-leads-6">Starring Leads-</b>
      <img className="image-52-icon" alt="" src="/image-52@2x.png" />
      <div className="gracy-singh">
        <p className="khan">Gracy</p>
        <p className="khan">Singh</p>
      </div>
    </div>
  );
};

export default Lagaan;
