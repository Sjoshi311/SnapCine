import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Pk.css";

const Pk = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="pk">
      <img className="image-6-icon2" alt="" src="/image-6@2x.png" />
      <div className="an-alien-on">
        An alien on Earth loses the only device he can use to communicate with
        his spaceship. His innocent nature and child-like questions force the
        country to evaluate the impact of religious views on people.
      </div>
      <div className="magestar-fill-parent49">
        <img
          className="magestar-fill-icon52"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div52">8.1</div>
      </div>
      <img className="pk-child" alt="" />
      <b className="snapcine2">SnapCine</b>
      <img className="image-37-icon" alt="" src="/image-37@2x.png" />
      <div className="h-33m">2014 2h 33m</div>
      <b className="pk1">PK</b>
      <b className="home2" onClick={onHomeTextClick}>
        Home
      </b>
      <img className="image-43-icon" alt="" src="/image-43@2x.png" />
      <div className="amir-khaan">
        <p className="amir">Amir</p>
        <p className="amir">Khaan</p>
      </div>
      <b className="starring-leads-2">Starring Leads-</b>
      <img className="image-47-icon" alt="" src="/image-47@2x.png" />
      <div className="anushka-sharma">
        <p className="amir">Anushka</p>
        <p className="amir">Sharma</p>
      </div>
    </div>
  );
};

export default Pk;
