import { React, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  function handleFileChange(event) {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    axios
      .post("http://localhost:5000/predict", formData)
      .then((response) => {
        console.log("Prediction result:", response.data);

        // Parse the prediction result string into an object
        const predictionResult = response.data;
        console.log("Predicted label:", predictionResult.prediction);

        // Check if prediction is 'tabu'
        if (predictionResult.prediction === "tabu") {
          
          navigate("/tabu");
        }
        if (predictionResult.prediction === "deepika") {
          
          navigate("/deepikapadukone");
        }
        if (predictionResult.prediction === "sunny") {
          
          navigate("/sunnydeol");
        }
        if (predictionResult.prediction === "sridevi") {
          
          navigate("/sridevi");
        }
        if (predictionResult.prediction === "ranveer") {
          
          navigate("/ranveersingh");
        }
        if (predictionResult.prediction === "anil") {
          
          navigate("/anilkapoor");
        }
        if (predictionResult.prediction === "amitabh") {
          
          navigate("/amitabhbachchan");
        }
        if (predictionResult.prediction === "akshay") {
          
          navigate("/akshaykumar");
        }
        if (predictionResult.prediction === "amrish") {
          
          navigate("/amrishpuri");
        }
        if (predictionResult.prediction === "nana") {
          
          navigate("/nanapatekar");
        }
      })
      .catch((error) => {
        console.error("Error predicting:", error);
      });
  }

  const onPKTextClick = useCallback(() => {
    navigate("/pk");
  }, [navigate]);

  const onImage37Click = useCallback(() => {
    navigate("/pk");
  }, [navigate]);

  const onDumLagaKeClick = useCallback(() => {
    navigate("/dum-laga-k-haisa");
  }, [navigate]);

  const onImage35Click = useCallback(() => {
    navigate("/dum-laga-k-haisa");
  }, [navigate]);

  const onLagaanTextClick = useCallback(() => {
    navigate("/lagaan");
  }, [navigate]);

  const onIdiotsTextClick = useCallback(() => {
    navigate("/3idiots");
  }, [navigate]);

  const onHichkiTextClick = useCallback(() => {
    navigate("/hichki");
  }, [navigate]);

  const onImage31Click = useCallback(() => {
    navigate("/hichki");
  }, [navigate]);

  const onPadmanTextClick = useCallback(() => {
    navigate("/padman");
  }, [navigate]);

  const onThFailTextClick = useCallback(() => {
    navigate("/12th-fail");
  }, [navigate]);

  const onOMG2TextClick = useCallback(() => {
    navigate("/omg-2");
  }, [navigate]);

  const onImage23Click = useCallback(() => {
    navigate("/omg-2");
  }, [navigate]);

  const onImage25Click = useCallback(() => {
    navigate("/12th-fail");
  }, [navigate]);

  const onImage32Click = useCallback(() => {
    navigate("/3idiots");
  }, [navigate]);

  const onImage27Click = useCallback(() => {
    navigate("/padman");
  }, [navigate]);

  const onImage33Click = useCallback(() => {
    navigate("/lagaan");
  }, [navigate]);

  const onHowItWorksClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='howSnapCineWorks']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Update search text state
  };

  const handleSearchSubmit = () => {
    // Perform search logic using searchText
    console.log("Search Text:", searchText);
  };

  return (
    <div className="home8">
      <img
        className="whatsapp-image-2024-01-16-at-2"
        alt=""
        src="/whatsapp-image-20240116-at-2102-1@2x.png"
      />

      <div className="pk2" onClick={onPKTextClick}>
        PK
      </div>
      <div className="magestar-fill-parent55">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">8.1</div>
      </div>
      <img
        className="image-37-icon1"
        alt=""
        src="/image-37@2x.png"
        onClick={onImage37Click}
      />
      <div className="dum-laga-ke1" onClick={onDumLagaKeClick}>
        Dum Laga Ke Haisha
      </div>
      <div className="magestar-fill-parent56">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">7.5</div>
      </div>
      <img
        className="image-35-icon1"
        alt=""
        src="/image-35@2x.png"
        onClick={onImage35Click}
      />
      <b className="enjoy-watching">4. Enjoy Watching</b>
      <div className="home-child" />
      <div className="contact-us">Contact Us</div>
      <div className="lagaan1" onClick={onLagaanTextClick}>
        Lagaan
      </div>
      <div className="idiots1" onClick={onIdiotsTextClick}>
        3 idiots
      </div>
      <div className="hichki2" onClick={onHichkiTextClick}>
        Hichki
      </div>
      <img
        className="image-31-icon1"
        alt=""
        src="/image-31@2x.png"
        onClick={onImage31Click}
      />
      <div className="padman3" onClick={onPadmanTextClick}>
        Padman
      </div>
      <div className="th-fail2" onClick={onThFailTextClick}>
        12th Fail
      </div>
      <div className="omg-22" onClick={onOMG2TextClick}>
        OMG 2
      </div>
      <img
        className="image-23-icon1"
        alt=""
        src="/image-23@2x.png"
        onClick={onImage23Click}
      />
      <img
        className="image-25-icon1"
        alt=""
        src="/image-25@2x.png"
        onClick={onImage25Click}
      />
      <img
        className="image-32-icon1"
        alt=""
        src="/image-32@2x.png"
        onClick={onImage32Click}
      />
      <img
        className="image-27-icon1"
        alt=""
        src="/image-27@2x.png"
        onClick={onImage27Click}
      />
      <img
        className="image-33-icon1"
        alt=""
        src="/image-33@2x.png"
        onClick={onImage33Click}
      />
      <div className="snapcine8">SnapCine</div>
      <input
        className="search-input"
        type="text"
        value={searchText}
        onChange={handleSearchChange} // Call handleSearchChange on input change
        placeholder="Search here..." // Placeholder text for input
      />
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <img
        className="image-removebg-preview-24-1"
        alt=""
        src="/imageremovebgpreview-24-1@2x.png"
        onClick={() => document.getElementById("fileInput").click()}
      />

      <div></div>
      <img
        className="home-inner"
        onClick={handleSearchSubmit}
        alt=""
        src="/group-9.svg"
      />

      <div className="top-picks">Top Picks</div>
      <div className="how-snapcine-works" data-scroll-to="howSnapCineWorks">
        How SnapCine Works
      </div>
      <div className="home-child1" />
      <div className="snap-or-select">
        Snap or select a photo of an actor or actress from your device and
        upload it to SnapCine.
      </div>
      <b className="upload-a-photo">1. Upload a Photo</b>
      <div className="home-child2" />
      <div className="our-technology-quickly">
        Our technology quickly identifies the celebrity in your photo and
        matches them to their movie database.
      </div>
      <b className="instant-analysis">2. Instant Analysis</b>
      <div className="home-child3" />
      <div className="get-a-curated">
        Get a curated list of movies featuring the identified actor or actress,
        complete with brief details and viewing options.
      </div>
      <div className="dive-into-your">
        Dive into your chosen movie and enjoy a cinematic adventure!
      </div>
      <b className="explore-movies">3. Explore Movies</b>
      <img
        className="lovepik-com-611702256-holiday-icon"
        alt=""
        src="/lovepik-com611702256holiday-couple-watching-movie-illustration-1@2x.png"
      />
      <div className="e-mail-snapcinegmailcom">E-mail: snapcine@gmail.com</div>
      <div className="phone-079">{`Phone - (079) - 22682660 `}</div>
      <b className="how-it-works" onClick={onHowItWorksClick}>
        How it Works?
      </b>
      <div className="magestar-fill-parent57">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">8.8</div>
      </div>
      <div className="magestar-fill-parent58">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">7.6</div>
      </div>
      <div className="magestar-fill-parent59">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">9.7</div>
      </div>
      <div className="magestar-fill-parent60">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">8.2</div>
      </div>
      <div className="magestar-fill-parent61">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">9.4</div>
      </div>
      <div className="magestar-fill-parent62">
        <img
          className="magestar-fill-icon58"
          alt=""
          src="/magestarfill@2x.png"
        />
        <div className="div58">8.0</div>
      </div>
      <div className="home-child4" />
      <div className="home-child5" />
      <div className="slice-div" />
    </div>
  );
};

export default Home;
