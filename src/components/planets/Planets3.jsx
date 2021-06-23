import "./planets.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Planetitem from "./Planetitem";

function Planets3(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="third-group">
      {props.data.map((planet) => (
        <Planetitem data={planet} />
      ))}
    </div>

    // <div className="third-group">
    //   <div className="uranus">
    //     <img
    //       data-aos="fade-up"
    //       data-aos-duration="3000"
    //       src={uranusicon}
    //       alt=""
    //     />
    //     <h1 data-aos="fade-up" data-aos-duration="3000">
    //       Uranus
    //     </h1>
    //   </div>
    //   <div className="neptune">
    //     <img
    //       data-aos="fade-up"
    //       data-aos-duration="2000"
    //       src={neptuneicon}
    //       alt=""
    //     />
    //     <h1 data-aos="fade-up" data-aos-duration="2000">
    //       Neptune
    //     </h1>
    //   </div>
    // </div>
  );
}

export default Planets3;
