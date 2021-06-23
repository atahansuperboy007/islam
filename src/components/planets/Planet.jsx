import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import planetsinfo from "../planetsinfo.json";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./planet.css";

function Planet() {
  const { id } = useParams();
  console.log(id + "planet");
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    setPlanet(planetsinfo.filter((item) => item.id === id)[0]);
  }, []);
  return (
    <div className={id + "-info"}>
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          src={planet.photo}
          alt=""
        ></img>
      <div className="info-info">
        <h1 data-aos="fade-up" data-aos-duration="2000">
          {planet.name}
        </h1>
        <ul data-aos="fade-up" data-aos-duration="2000">
          <li>
            Возраст планеты: <b>{planet.age}</b> 
          </li>
          <li>
            Расстояние от солнца: <b>{planet.fromsun}</b>
          </li>
          <li>
            Радиус планеты: <b>{planet.radius}</b>
          </li>
          <li>
            Диаметр планеты: <b>{planet.diameter}</b>
          </li>
          <li>
            Кол-во спутников: <b>{planet.moons}</b>
          </li>
          <li>
            О планете: <b>{planet.description}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Planet;
