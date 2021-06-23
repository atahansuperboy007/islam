import React from "react";
import Galacticitem from "./Galacticitem";

function Galactics3(props) {
  return (
    <div className="gala-third-group">
      {props.data.map((galactic) => (
        <Galacticitem data={galactic} />
      ))}
    </div>
  );
}

export default Galactics3;
