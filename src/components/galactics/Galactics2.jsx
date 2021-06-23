import React from "react";
import Galacticitem from "./Galacticitem";

function Galactics2(props) {
  return (
    <div className="gala-second-group">
      {props.data.map((galactic) => (
        <Galacticitem data={galactic} />
      ))}
    </div>
  );
}

export default Galactics2;
