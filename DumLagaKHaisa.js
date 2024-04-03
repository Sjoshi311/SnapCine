import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DumLagaKHaisa.css";

const DumLagaKHaisa = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="dum-laga-k-haisa">
      <img className="image-6-icon1" alt="" src="/image-6@2x.png" />
      <div className="prem-and-his">
        Prem and his oversized wife Sandhya are supposed to spend a lifetime
        together. Will a regular arranged marriage turn out to be a perfect
        mismatch?
      </div>
      <div className="magestar-fill-parent48">
        <img
          className="magestar-fill-icon51"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div51">7.5</div>
      </div>
      <img className="dum-laga-k-haisa-child" alt="" />
      <b className="snapcine1">SnapCine</b>
      <img className="image-35-icon" alt="" src="/image-35@2x.png" />
      <div className="h-36m1">2023 2h 36m</div>
      <b className="dum-laga-ke">Dum Laga Ke Haisha</b>
      <b className="home1" onClick={onHomeTextClick}>
        Home
      </b>
      <b className="starring-leads-1">Starring Leads-</b>
      <img className="image-38-icon" alt="" src="/image-38@2x.png" />
      <img className="image-39-icon" alt="" src="/image-39@2x.png" />
      <div className="bhumi-pednekar">Bhumi Pednekar</div>
      <div className="ayushmann-khurrana">Ayushmann Khurrana</div>
    </div>
  );
};

export default DumLagaKHaisa;
