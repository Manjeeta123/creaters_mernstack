import React,{useState,useEffect} from "react";
import profile from "../images/profile.jpg";
import {useHistory} from "react-router-dom";



function About() {
const history = useHistory();
const [userdata,setdata]=useState({name:"",email:"",number:"",message:""});
const callAboutPage =async ()=>{
  
     const res= await fetch("/about",{
       method:"GET",
       header:{
         Accept:"application/json",
         "Content-Type":"application/json"
       },
       credentials:"include"
     });

     const data = await res.json();
     
     if (res.status !== 200){
       console.log(res.error);
       history.push("/signin");
     }else{
      setdata(data);
     }
 
}  

useEffect(()=> {
  callAboutPage();
});


  return (
     <div className="form-box ">
       <form method="GET">
       <div className="container row">
       
        <div className="col-md-4">
           <img src={profile} className="img-fluid" width="100%"alt="profile"/>
        </div>
        <div className="col-md-8 pt-3">
        <div className="row">
        <div className="col-md-7">
           <h5 >{userdata.name}</h5>
           <p>{userdata.work}</p>
        </div>
       
       </div>

       <div className="row">
         <div className="col-md-10">
             
           <ul className="nav nav-tabs about-tab " role="tablist">
            <li className="nav-item ">
             <a className="nav-link  tab active "  data-toggle="tab" id="home-tab" href="#home">Home</a>
            </li>
 
             <li className="nav-item ">
               <a className="nav-link tab " id="timeline-tab" data-toggle="tab" href="#timeline">Timeline</a>
             </li>
 
           </ul>
         </div>
       </div>
       </div>
         
        </div>
      


       <div className="row container" >
         <div className="col-md-4">

         </div>
         <div className="col-md-8">
           <div  className="tab-content" id="tabcontent"> 
                 <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                     
                      <div className="row">
                        <div className="col-md-6">
                          <label className="about-label-text">Name</label>
                        </div>

                        <div className="col-md-6">
                         <p>{userdata.name}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label className="about-label-text">Email</label>
                        </div>

                        <div className="col-md-6">
                         <p>{userdata.email}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label className="about-label-text">Mobile number</label>
                        </div>

                        <div className="col-md-6">
                         <p>{userdata.number}</p>
                        </div>
                      </div>

                 </div>

                 <div className="tab-pane fade show active" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                 <div className="row">
                        <div className="col-md-6">
                          <label className="about-label-text">Experience</label>
                        </div>

                        <div className="col-md-6">
                         <p>5 years</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label className="about-label-text">Hourly rate</label>
                        </div>

                        <div className="col-md-6">
                         <p>5 hrs</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label className="about-label-text">projects</label>
                        </div>

                        <div className="col-md-6">
                         <p>4</p>
                        </div>
                      </div>

                      
                 
                 
                 </div>

                

           </div>

          


         </div>
     
       </div>
       </form>   
     </div>
  );
}

export default About;
