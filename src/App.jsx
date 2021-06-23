import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./nav.css";
import Navbar from "./components/Navbar";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import Main4 from "./components/Main4";
import Video from "./components/Video";
import Footer from "./components/Footer";
import Stars from "./components/stars/Stars";
import Exoplanets from "./components/exoplanets/Exoplanets";
import Planets from "./components/planets/Planets";
import Galactics from "./components/galactics/Galactics";
import navlogo from "./nav-images/nav-logo.png";
import navplanet from "./nav-images/nav-planet.png";
import navexoplanet from "./nav-images/nav-exoplanet.png";
import navstar from "./nav-images/nav-star.png";
import navgalaxy from "./nav-images/nav-galaxy.png";
import navlogo2 from "./nav-images/nav-logo-2.png";
import nav3d from './nav-images/nav-3d.png'
import React, { useEffect } from "react";
import lgbt from './nav-images/lgbtspacex.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Planets2 from './components/planets/Planets2'
import Planets3 from './components/planets/Planets3'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <BrowserRouter>
      <div className="nav">
      <div data-aos-duration="1000" data-aos="zoom-in" className="nav-inner">
        <div className="nav-logo">
          <img src={navlogo} alt="" />
        </div>
          <div className="nav-info">
            <Link to="/main">
              <h3>Главная</h3>
            </Link>

            <img src={navlogo2} alt="" />

            <Link to="/planets">
              <h3>Планеты</h3>
            </Link>

            <img src={navplanet} alt="" />

            <Link to="/exoplanets">
              <h3>Экзопланеты</h3>
            </Link>

            <img src={navexoplanet} alt="" />

            <Link to="/stars">
              <h3>Звезды</h3>
            </Link>

            <img src={navstar} alt="" />

            <Link to="/galactics">
              <h3>Галактики</h3>
            </Link>

            <img src={navgalaxy} alt="" />

            {/* <Link to="/3d">
              <h3>3D</h3>
            </Link>

            <img src={nav3d} alt="" /> */}

          </div>
      </div>
    </div>
    <Switch>
          <Route path="/main">
            <Main1 />
            <Main2 />
            <Main3 />
            <Main4 />
            <Video />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/exoplanets">
            <Exoplanets />
          </Route>
          <Route path="/stars">
            <Stars />
          </Route>
          <Route path="/galactics">
            <Galactics />
          </Route>
          <Route path="/3d">
          </Route>
    </Switch>
    </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
