import React from "react";
import { Link } from "react-router-dom";
import "./galactics.css";
import galacticsinfo from "./galacticsinfo.json";

function Galacticitem(props) {
  return (
    <Link to={"/galactic/" + props.data.id} className={props.data.id}>
      <div className="icon">
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          src={props.data.icon}
          alt=""
        />
        <h1 data-aos="fade-up" data-aos-duration="2000">
          {props.data.name}
        </h1>
      </div>
    </Link>
  );
}

export default Galacticitem;
