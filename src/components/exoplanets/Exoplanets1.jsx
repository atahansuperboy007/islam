import Exoplanetitem from "./Exoplanetitem";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Exoplanets1(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="exo-first-group">
      {props.data.map((exoplanet) => (
        <Exoplanetitem data={exoplanet} />
      ))}
    </div>
  );
}

export default Exoplanets1