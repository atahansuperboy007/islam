import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./planets.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Planets1 from "./Planets1";
import Planets2 from "./Planets2";
import Planets3 from "./Planets3";
import planetsinfo from "../planetsinfo.json";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Planet from './Planet'

function Planets() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  console.log(planetsinfo);
  return (
    <div className="planets">
      <div className="planets-inner">
        <h1><b>PLANETS</b></h1>
        <BrowserRouter>
          <Switch>
            <Route path="/planets">
              <Planets1 data={planetsinfo.slice(0,3)}/>
              <Planets2 data={planetsinfo.slice(3,6)}/>
              <Planets3 data={planetsinfo.slice(6,8)}/>
            </Route>
            <Route path="/planet/:id">
              <Planet />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>

    // <div className="planets">
    //   <div className="planets-inner">
    //     <h1>PLANETS</h1>
    //     <div className="first-group">
    //       <BrowserRouter>
    //         <Link to="/mercuryinfo">
    //           <div className="mercury">
    //             <img
    //               data-aos="fade-up"
    //               data-aos-duration="1000"
    //               src={mercuryicon}
    //               alt=""
    //             />
    //             <h1 data-aos="fade-up" data-aos-duration="1000">
    //               Mercury
    //             </h1>
    //           </div>
    //         </Link>

    //         <Link to="/venusinfo">
    //           <div className="venus">
    //             <img
    //               data-aos="fade-up"
    //               data-aos-duration="2000"
    //               src={venusicon}
    //               alt=""
    //             />
    //             <h1 data-aos="fade-up" data-aos-duration="2000">
    //               Venus
    //             </h1>
    //           </div>
    //         </Link>

    //         {/* <Link to="/earthinfo"> */}
    //           <div className="earth">
    //             <img
    //               data-aos="fade-up"
    //               data-aos-duration="3000"
    //               src={earthicon}
    //               alt=""
    //             />
    //             <h1 data-aos="fade-up" data-aos-duration="3000">
    //               Earth
    //             </h1>
    //           </div>
    //         {/* </Link> */}

    //         <Link to="/planets/:id">
    //           Planet
    //         </Link>

    //         <Switch>
    //           <Route path="/planets/:id">
    //               <Test />
    //           </Route>
    //           <Route path="/mercuryinfo">
    //               <Mercury />
    //           </Route>
    //           <Route path="/venusinfo">
    //               <Venus />
    //           </Route>
    //           <Route path="/earthinfo">
    //               <Earth />
    //           </Route>
    //         </Switch>
    //       </BrowserRouter>
    //     </div>
    //     <Planets2 />
    //     <Planets3 />
    //   </div>
    // </div>
  );
}

export default Planets;
