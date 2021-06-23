import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Staritem from './Staritem'
import './stars.css'

function Stars3(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      return (
        <div className="star-third-group">
          {props.data.map((star) => (
            <Staritem data={star} />
          ))}
        </div>
      );
}

export default Stars3