import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AkshayKumar from "./pages/AkshayKumar";
import AmitabhBachchan from "./pages/AmitabhBachchan";
import Sridevi from "./pages/Sridevi";
import NanaPatekar from "./pages/NanaPatekar";
import Tabu from "./pages/Tabu";
import SunnyDeol from "./pages/SunnyDeol";
import DeepikaPadukone from "./pages/DeepikaPadukone";
import RanveerSingh from "./pages/RanveerSingh";
import AnilKapoor from "./pages/AnilKapoor";
import AmrishPuri from "./pages/AmrishPuri";
import Omg from "./pages/Omg";
import DumLagaKHaisa from "./pages/DumLagaKHaisa";
import Pk from "./pages/Pk";
import Padman from "./pages/Padman";
import Idiots from "./pages/Idiots";
import Hichki from "./pages/Hichki";
import Lagaan from "./pages/Lagaan";
import ThFail from "./pages/ThFail";
import Home from "./pages/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/akshay-kumar":
        title = "";
        metaDescription = "";
        break;
      case "/amitabh-bachchan":
        title = "";
        metaDescription = "";
        break;
      case "/sridevi":
        title = "";
        metaDescription = "";
        break;
      case "/nana-patekar":
        title = "";
        metaDescription = "";
        break;
      case "/tabu":
        title = "";
        metaDescription = "";
        break;
      case "/sunny-deol":
        title = "";
        metaDescription = "";
        break;
      case "/deepika-padukone":
        title = "";
        metaDescription = "";
        break;
      case "/ranveer-singh":
        title = "";
        metaDescription = "";
        break;
      case "/anil-kapoor":
        title = "";
        metaDescription = "";
        break;
      case "/amrish-puri":
        title = "";
        metaDescription = "";
        break;
      case "/omg-2":
        title = "";
        metaDescription = "";
        break;
      case "/dum-laga-k-haisa":
        title = "";
        metaDescription = "";
        break;
      case "/pk":
        title = "";
        metaDescription = "";
        break;
      case "/padman":
        title = "";
        metaDescription = "";
        break;
      case "/3idiots":
        title = "";
        metaDescription = "";
        break;
      case "/hichki":
        title = "";
        metaDescription = "";
        break;
      case "/lagaan":
        title = "";
        metaDescription = "";
        break;
      case "/12th-fail":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/akshaykumar" element={<AkshayKumar />} />
      <Route path="/amitabhbachchan" element={<AmitabhBachchan />} />
      <Route path="/sridevi" element={<Sridevi />} />
      <Route path="/nanapatekar" element={<NanaPatekar />} />
      <Route path="/tabu" element={<Tabu />} />
      <Route path="/sunnydeol" element={<SunnyDeol />} />
      <Route path="/deepikapadukone" element={<DeepikaPadukone />} />
      <Route path="/ranveersingh" element={<RanveerSingh />} />
      <Route path="/anilkapoor" element={<AnilKapoor />} />
      <Route path="/amrishpuri" element={<AmrishPuri />} />
      <Route path="/omg-2" element={<Omg />} />
      <Route path="/dum-laga-k-haisa" element={<DumLagaKHaisa />} />
      <Route path="/pk" element={<Pk />} />
      <Route path="/padman" element={<Padman />} />
      <Route path="/3idiots" element={<Idiots />} />
      <Route path="/hichki" element={<Hichki />} />
      <Route path="/lagaan" element={<Lagaan />} />
      <Route path="/12th-fail" element={<ThFail />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
