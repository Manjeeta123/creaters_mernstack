import React from "react";
import {NavLink} from "react-router-dom";

function Errorpage(){
    return (
        <>
          <div className="notfound">
              <h3> 404 error</h3>
              <p>page not found !!!!</p>
              <NavLink className="nav-link " to="/">Back to Home Page</NavLink>
          </div>
        </>
    )
    ;
}

export default Errorpage;