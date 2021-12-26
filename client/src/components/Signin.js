import React,{useContext, useState} from "react";
import login from "../images/login.png";
import {useHistory} from "react-router-dom";
import { UserContext } from "../App";

function Signin() {

  const {state,dispatch} = useContext(UserContext);
  const history = useHistory();

const [user,setUser]=useState({email:"",password:""});
let name,value;
function loginhandle(e){
  name=e.target.name;
  value=e.target.value;

  setUser({...user,[name]:value});
}

const loginSubmit = async(e) => {
  e.preventDefault();
  const { email, password } = user;

  const res= await fetch("/signin",{
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email, password
    })
  });
  
   if(res.status === 200){
     dispatch({type:"USER",payload:true})
    history.push("/");
   } else{
    window.alert("Invalid Username/password");
    history.push("/signin");
   }


}

  return (
 <>

<div className="register">
   <div className="container p-4 ">
     <div className="row">
     <div className="col-md-6 col-12"> 
        
        <figure className="reg-pic">
          <img src={login}  className="img-fluid mt-5" alt="login-pic"/>
        </figure>
      </div>
       <div className="col-md-6 col-12">
          <h4>Login</h4>
           <br/>
           <br/>
<form method="POST" onSubmit={loginSubmit}>
 
  <div className="mb-3">
  <div className="row">
  <div className="col-1">
    <label htmlFor="email" className="form-label">
    <i className="fa fa-envelope"></i>
    </label>
  </div>
  <div className="col-10"> 
    <input type="email" className="form-control form-input finput" name="email" onChange={loginhandle} value={user.email} placeholder=" Email Address" />
   </div>
    </div>  </div>

  

  <div className="mb-3 ">
  <div className="row">
  <div className="col-1">
  <label htmlFor="password" className="form-label">
  <i className="fa fa-lock"></i>
</label>
   </div>
   <div className="col-10"> 
   <input type="password" className="form-control form-input finput" name="password" onChange={loginhandle} value={user.password} placeholder="Password"/>
   </div>
  
  </div>  </div>
 


  <center>
  <button type="submit" className="btn btn-primary">Submit</button>
   </center>
</form>

      </div>
    
     </div>
       
   </div>
 </div>



 </>
  );
}

export default Signin;