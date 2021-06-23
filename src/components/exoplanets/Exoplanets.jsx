import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./exoplanets.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import exoplanetsinfo from './exoplanetsinfo.json'
import Exoplanets1 from './Exoplanets1'
import Exoplanets2 from './Exoplanets2'
import Exoplanets3 from './Exoplanets3'
import Exoplanet from './Exoplanet'
import Navbar from "../Navbar";
import Footer from "../Footer";

function Exoplanets() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  console.log(exoplanetsinfo);
  return (
    <div className="exoplanets">
      <h2><b>EXOPLANETS</b></h2>
      <div className="exoplanets-inner">
        <BrowserRouter>
        <Switch>
          <Route path="/exoplanets">
            <Exoplanets1 data={exoplanetsinfo.slice(0,3)}/>
            <Exoplanets2 data={exoplanetsinfo.slice(3,6)}/>
            <Exoplanets3 data={exoplanetsinfo.slice(6,10)}/>
          </Route>
          <Route path="/exoplanet/:id">
            <Exoplanet />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Exoplanets;
