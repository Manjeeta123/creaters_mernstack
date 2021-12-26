import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Signin from "./components/Signin";
import Errorpage from "./components/Errorpage";
import "bootstrap/dist/css/bootstrap.css";
import {Route,Switch} from "react-router-dom";
import {initialState,reducer} from "./reducer/useReducer";

import './App.css';



export const UserContext=createContext();

const Routing =()=>{
  return(
<Switch>
<Route exact path="/">
<Home />
</Route>
<Route exact path="/about">
<About />
</Route>
<Route exact path="/contact">
<Contact />
</Route>
<Route exact path="/register">
<Register />
</Route>
<Route exact path="/signin">
<Signin />
</Route>
<Route exact path="/logout">
<Logout />
</Route>

<Route>
<Errorpage />
</Route>

</Switch>
  );
}

function App() {

  const [state,dispatch]=useReducer(reducer,initialState)
  return (
 <div>
 
<UserContext.Provider value={{state ,dispatch}}>
 <Navbar />
<Routing />
</UserContext.Provider>

 </div>
  );
}

export default App;
