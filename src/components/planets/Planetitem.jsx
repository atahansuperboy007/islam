import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import planetsinfo from "../planetsinfo.json";
import Planet from "./Planet";

function Planetitem(props) {
  console.log(process.env.PUBLIC_URL);
  return (
      <Link to={"/planet/" + props.data.id} className={props.data.id}>
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

export default Planetitem;
