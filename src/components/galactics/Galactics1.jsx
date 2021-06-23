import React from "react";
import Galacticitem from "./Galacticitem";

function Galactics1(props) {
  return (
    <div className="gala-first-group">
      {props.data.map((galactic) => (
        <Galacticitem data={galactic} />
      ))}
    </div>
  );
}

export default Galactics1;
