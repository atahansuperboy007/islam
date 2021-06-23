import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import starsinfo from "./starsinfo.json";
import "./stars.css";
import "./star.css";

function Star() {
  const { id } = useParams();
  console.log(id + "star");
  const [star, setStar] = useState({});
  useEffect(() => {
    setStar(starsinfo.filter((item) => item.id === id)[0]);
  }, []);
  return (
    <div className={id + "-info"}>
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        src={star.photo}
        alt=""
      ></img>
      <div className="info-info">
        <h1 data-aos="fade-up" data-aos-duration="2000">
          {star.name}
        </h1>
        <ul data-aos="fade-up" data-aos-duration="2000">
          <li>
            Возраст: <b>{star.age}</b>
          </li>
          <li>
            Расстояние от Солнца: <b>{star.fromsun}</b>
          </li>
          <li>
            Радиус: <b>{star.radius}</b>
          </li>
          <li>
            Класс: <b>{star.class}</b>
          </li>
          <li>
            Масса: <b>{star.massa}</b>
          </li>
          <li>
            Температура: <b>{star.temp}</b>
          </li>
          <li>
            Светимость: <b>{star.svet}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Star;
