import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import exoplanetsinfo from "./exoplanetsinfo.json";
import "./exoplanet.css";

function Exoplanet() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { id } = useParams();
  console.log(id + "exoplanet");
  const [exoplanet, setExoplanet] = useState({});
  useEffect(() => {
    setExoplanet(exoplanetsinfo.filter((item) => item.id === id)[0]);
  }, []);

  return (
    <div className={id + "-exo-info"}>
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        src={exoplanet.photo}
        alt=""
      ></img>
      <div className="exo-info-info">
        <h1 data-aos="fade-up" data-aos-duration="2000">
          {exoplanet.name}
        </h1>
        <ul data-aos="fade-up" data-aos-duration="2000">
          <li>
            Прозвище: <b>{exoplanet.nick}</b>{" "}
          </li>
          <li>
            Расстояние от Солнца: <b>{exoplanet.fromsun}</b>{" "}
          </li>
          <li>
            Температура: <b>{exoplanet.temperature}</b>{" "}
          </li>
          <li>
            Дата открытия: <b>{exoplanet.date}</b>{" "}
          </li>
          <li>
            Описание: <b>{exoplanet.description}</b>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Exoplanet;
