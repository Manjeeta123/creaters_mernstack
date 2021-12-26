import React ,{useContext} from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/logo.png";
import { UserContext } from "../App";

function Navbar() {
  const {state,dispatch} = useContext(UserContext);

   const Rendermenu=() =>{
     if(state){
      return (<>
        <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
      </li>
    
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
     </>
     );

       
     }else {  
      return (<>
       
        <li className="nav-item ">
         <NavLink className="nav-link" to="/">Home </NavLink>
       </li>
       <li className="nav-item">
        <NavLink className="nav-link " to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
      </li>
       <li className="nav-item">
         <NavLink className="nav-link" to="/signin">Login</NavLink>
       </li>
       <li className="nav-item">
         <NavLink className="nav-link" to="/register">Registration</NavLink>
       </li>
      
     
 
        </>);
     }
   }


  return (
  <div >
        <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <div className="container">
  <NavLink className="navbar-brand  " to="/">
    <img src={logo}  alt="logo"></img>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ms-auto ">
       <Rendermenu />
    
    
     
    </ul>
   
  </div>
  </div>
</nav>

  </div>
  );
}

export default Navbar;
