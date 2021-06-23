import "./galactics.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Galacticitem from "./Galacticitem";
import Galactics1 from "./Galactics1";
import Galactics2 from "./Galactics2";
import Galactics3 from "./Galactics3";
import Galactic from "./Galactic";
import galacticsinfo from './galacticsinfo.json'

function Galactics() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="galactics">
      <div className="galactics-inner">
            <h1>
              <b>GALACTICS</b>
            </h1>
            <BrowserRouter>
              <Switch>
                <Route path="/galactics">
                  <Galactics1 data={galacticsinfo.slice(0,1)} />
                  <Galactics2 data={galacticsinfo.slice(1,2)} />
                  <Galactics3 data={galacticsinfo.slice(2,3)} />
                </Route>
                <Route path="/galactic/:id">
                  <Galactic />
                </Route>
              </Switch>
            </BrowserRouter>
      </div>
    </div>
  );
}

export default Galactics;
