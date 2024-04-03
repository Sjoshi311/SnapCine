import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Idiots.css";

const Idiots = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="idiots">
      <img className="image-6-icon4" alt="" src="/image-6@2x.png" />
      <div className="two-friends-are">
        Two friends are searching for their long lost companion. They revisit
        their college days and recall the memories of their friend who inspired
        them to think differently, even as the rest of the world called them
        "idiots".
      </div>
      <div className="magestar-fill-parent51">
        <img
          className="magestar-fill-icon54"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div54">8.4</div>
      </div>
      <img className="idiots-child" alt="" />
      <b className="snapcine4">SnapCine</b>
      <img className="image-32-icon" alt="" src="/image-32@2x.png" />
      <div className="h-50m">2009 2h 50m</div>
      <b className="padman2">3 idiots</b>
      <b className="home4" onClick={onHomeTextClick}>
        Home
      </b>
      <img className="image-43-icon1" alt="" src="/image-43@2x.png" />
      <div className="amir-khaan1">
        <p className="sharman">Amir</p>
        <p className="sharman">Khaan</p>
      </div>
      <b className="starring-leads-4">Starring Leads-</b>
      <img className="image-44-icon" alt="" src="/image-44@2x.png" />
      <div className="madhvan">Madhvan</div>
      <img className="image-46-icon" alt="" src="/image-46@2x.png" />
      <div className="sharman-joshi">
        <p className="sharman">Sharman</p>
        <p className="sharman">Joshi</p>
      </div>
    </div>
  );
};

export default Idiots;
