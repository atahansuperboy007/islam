import Planetitem from "./Planetitem";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Planets1(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="first-group">
      {props.data.map((planet) => (
        <Planetitem data={planet} />
      ))}
    </div>
  );
}

export default Planets1;
