import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "../nav.css";
import navlogo from "../nav-images/nav-logo.png";
import navplanet from "../nav-images/nav-planet.png";
import navexoplanet from "../nav-images/nav-exoplanet.png";
import navstar from "../nav-images/nav-star.png";
import navgalaxy from "../nav-images/nav-galaxy.png";
import navlogo2 from "../nav-images/nav-logo-2.png";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Video from "./Video";
import Footer from "./Footer";
import Stars from "./stars/Stars";
import Exoplanets from "./exoplanets/Exoplanets";
import Planets from "./planets/Planets";
import Galactics from "./galactics/Galactics";

function Navbar() {
  return (
    <div className="nav">
      <div data-aos-duration="1000" data-aos="zoom-in" className="nav-inner">
        <div className="nav-logo">
          <img src={navlogo} alt="" />
        </div>
        <BrowserRouter>
          <div className="nav-info">
            <div className="info-1">
              <Link to="/main">
                <h3>Главная</h3>
              </Link>

              <img src={navlogo2} alt="" />
            </div>

            <div className="info-1">
              <Link to="/planets">
                <h3>Планеты</h3>
              </Link>

              <img src={navplanet} alt="" />
            </div>

            <div className="info-1">
              <Link to="/exoplanets">
                <h3>Экзопланеты</h3>
              </Link>

              <img src={navexoplanet} alt="" />
            </div>
            
            <div className="info-1">
              <Link to="/stars">
                <h3>Звезды</h3>
              </Link>

              <img src={navstar} alt="" />
            </div>

            <div className="info-1">
              <Link to="/galasctics">
                <h3>Галактики</h3>
              </Link>

              <img src={navgalaxy} alt="" />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Navbar;
