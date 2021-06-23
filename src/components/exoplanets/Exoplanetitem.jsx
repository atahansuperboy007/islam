import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Exoplanet from "./Exoplanet";
import exoplanetsinfo from './exoplanetsinfo.json'

function Exoplanetitem(props) {
  return (
      <Link to={"/exoplanet/" + props.data.id} className={props.data.id}>
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
  );
}

export default Exoplanetitem;