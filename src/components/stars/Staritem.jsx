import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import starsinfo from "./starsinfo.json";
import Star from "./Star";
import './stars.css'

function Staritem(props) {
  return (
      <Link to={"/star/" + props.data.id} className={props.data.id}>
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          src={props.data.icon}
          alt=""
        />
        <h1 data-aos="fade-up" data-aos-duration="2000">
          {props.data.name}
        </h1>
      </Link>
  )
}

export default Staritem
