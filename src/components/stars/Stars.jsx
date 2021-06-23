import "./stars.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import starsinfo from './starsinfo.json'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Stars1 from './Stars1'
import Stars2 from './Stars2'
import Stars3 from './Stars3'
import Star from './Star'
import './stars.css'

function Stars() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="stars">
        <h1>
          <b>STARS</b>
        </h1>
      <div className="stars-inner">
        <BrowserRouter>
          <Switch>
            <Route path="/stars">
              <Stars1 data={starsinfo.slice(0,1)} />
              <Stars2 data={starsinfo.slice(1,2)} />
              <Stars3 data={starsinfo.slice(2,3)} />
            </Route>
            <Route path="/star/:id">
              <Star />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Stars;
