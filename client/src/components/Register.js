import React,{useState} from "react";
import register from "../images/register-img.png";
import {useHistory} from "react-router-dom";



function Register() {

  const history = useHistory();

  const [user ,setUser]=useState({
    name:"",email:"",number:"",work:"",password:"",cpassword:""
  });
  
  let name,value;
  function handleinput(e){
    name=e.target.name;
   value=e.target.value;
   setUser({...user , [name]:value});
  }

const postData=  async (e) => {
    e.preventDefault();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    const { name, email, number, work, password, cpassword } = user;

     if (!name || !work || !email || !number || !password || !cpassword) {
        console.log("emtpy details");
       window.alert("please fill are the details");
       history.push("/register");

    }else if(!filter.test(email)){
      window.alert("please enter valid email");
  } else if(isNaN(number)|| number.length!=10){
    window.alert("please enter valid mobile number");
  } 
    else if (password !== cpassword) {
      console.log("password should be same");
      window.alert("password and confirm password are not match");
      history.push("/register");
    }
    else {

    const res= await fetch("/register", {
      method: "POST",
      headers: {
       
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        name, email, number, work, password, cpassword
      })
    }
    ) ;

   
  console.log(res.status);
  if(res.status === 200){
    history.push("/signin");
   } else{
    window.alert("Invalid Registration");
    history.push("/register");
   }
  }
    }

  

  return (
  <div>

 <div className="register">
   <div className="container p-4 ">
     <div className="row">
       <div className="col-md-6 col-12">
          <h4>Register</h4>
           <br/>
          <form method="POST" onSubmit={postData}>
  <div className="mb-3">
  <div className="row">
  <div className="col-1">
    <label htmlFor="name" className="form-label">
    <i class="fa fa-user"></i>
    </label>
  </div>
  <div className="col-10"> 
    <input value={user.name} onChange={handleinput} type="text" className="form-control form-input finput " name="name" placeholder=" Full Name"  />
   </div>
    </div>
  </div>
  <div className="mb-3">
  <div className="row">
  <div className="col-1">
    <label htmlFor="email" className="form-label">
    <i className="fa fa-envelope"></i>
    </label>
  </div>
  <div className="col-10"> 
    <input value={user.email} onChange={handleinput} type="email" id ="email" className="form-control form-input finput" name="email"  placeholder=" Email Address" />
   </div>
    </div>  </div>

  <div className="mb-3">
  <div className="row">
  <div className="col-1">
    <label htmlFor="number" className="form-label">
    <i className="fa fa-phone"></i>
    </label>
  </div>
  <div className="col-10"> 
    <input value={user.number} onChange={handleinput} type="text" className="form-control form-input finput" name="number"  placeholder=" Mobile Number" />
 </div>
  </div>  </div>
  <div className="mb-3">
  <div className="row">
  <div className="col-1">
    <label htmlFor="work" className="form-label">
    <i className="fa fa-list-alt"></i>
    </label>
  </div>
  <div className="col-10"> 
    <input value={user.work} onChange={handleinput} type="text" className="form-control form-input finput" name="work" placeholder=" Work" />
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
   <input  type="password" className="form-control form-input finput" name="password" placeholder="Password"  value={user.password} onChange={handleinput}/>
   </div>
  
  </div>  </div>
 

  <div className="mb-3 ">
  <div className="row">
  <div className="col-1">
  <label htmlFor="cpassword" className="form-label">
  <i className="fa fa-lock"></i>
</label>
   </div>
   <div className="col-10"> 
   <input  type="password" className="form-control form-input finput" name="cpassword" placeholder="Confirm Password"  value={user.cpassword} onChange={handleinput}/>
   </div>
  
  </div>  </div>
  <center>
  <button type="submit"  className="btn btn-primary">Register</button>
   </center>
</form>

      </div>
      <div className="col-md-6 col-12"> 
        
        <figure className="reg-pic">
          <img src={register}  className="img-fluid mt-5" alt="register-pic"/>
        </figure>
      </div>
     </div>
       
   </div>
 </div>

  </div>
  );
}

export default Register;