import "./planets.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Planetitem from './Planetitem'

function Planets2(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="second-group">
      {props.data.map((planet) => (
        <Planetitem data={planet} />
      ))}
    </div>


    // <div className="second-group">
    //   <div className="mars">
    //     <img
    //       data-aos="fade-up"
    //       data-aos-duration="3000"
    //       src={marsicon}
    //       alt=""
    //     />
    //     <h1 data-aos="fade-up" data-aos-duration="3000">
    //       Mars
    //     </h1>
    //   </div>
    //   <div className="jupiter">
    //     <img
    //       data-aos="fade-up"
    //       data-aos-duration="2000"
    //       src={jupitericon}
    //       alt=""
    //     />
    //     <h1 data-aos="fade-up" data-aos-duration="2000">
    //       Jupiter
    //     </h1>
    //   </div>
    //   <div className="saturn">
    //     <img
    //       data-aos="fade-up"
    //       data-aos-duration="1000"
    //       src={saturnicon}
    //       alt=""
    //     />
    //     <h1 data-aos="fade-up" data-aos-duration="1000">
    //       Saturn
    //     </h1>
    //   </div>
    // </div>
  );
}

export default Planets2;
