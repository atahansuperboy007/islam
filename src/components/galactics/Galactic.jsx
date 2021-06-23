import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import galacticsinfo from "./galacticsinfo.json";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./galactic.css";

function Galactic() {
  const { id } = useParams();
  console.log(id + "gala");
  const [galactic, setGalactic] = useState({});
  useEffect(() => {
    setGalactic(galacticsinfo.filter((item) => item.id === id)[0]);
  }, []);
  return (
    <div className={id + "-info"}>
      <div className="image-info">
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          src={galactic.photo}
          alt=""
        ></img>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="info-info">
        <h1>
          {galactic.name}
        </h1>
        <h3>
          Возраст галактики: <b>{galactic.age}</b>
        </h3>
        <h3>
          Радиус галактики: <b>{galactic.radius}</b>
        </h3>
        <h3>
          Кол-во звезд в галактике: <b>{galactic.stars}</b>
        </h3>
        <h3>
          Вид галактики: <b>{galactic.type}</b>
        </h3>
      </div>
    </div>
  );
}

export default Galactic;
