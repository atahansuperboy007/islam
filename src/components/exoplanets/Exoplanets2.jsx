import Exoplanetitem from "./Exoplanetitem";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Exoplanets2(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="exo-second-group">
      {props.data.map((exoplanet) => (
        <Exoplanetitem data={exoplanet} />
      ))}
    </div>
  );
}

export default Exoplanets2