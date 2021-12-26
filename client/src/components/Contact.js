import React,{useState,useEffect} from "react";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";
import {useHistory} from "react-router-dom";

function Contact() {

   const history = useHistory();
const [userdata,setdata]=useState({});
const callcontactPage =async ()=>{
  
     const res= await fetch("/contact",{
       method:"GET",
       header:{
        
         "Content-Type":"application/json"
       }
      
     });

     const data = await res.json();
     

     if (res.status !== 200){
       console.log(res.error);
       history.push("/signin");
     }else{
      setdata({...userdata,name:data.name,email:data.email,number:data.number});
     }
 
}  

useEffect(()=> {
  callcontactPage();
},[]);



function handleform(e){
   const ename=e.target.name;
   const  evalue=e.target.value;
  
   setdata({...userdata,[ename]:evalue});
   console.log(userdata);
}
    
const submitform = async(e) => {
   e.preventDefault();
   const {name, email, number,message} = userdata;
 
   const res= await fetch("/contact",{
     method: "POST",
     headers: {
      
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
      name, email, number,message
     })
   });
    
    if(res.status === 200){
     alert("your message is send successfully")
     setdata({name:userdata.name,email:userdata.email,number:userdata.number,message:""});
    
    } else{
     window.alert("not send try again");
     history.push('/contact');
    }
 
 
 }


  return (
  <div >
     <div className="row m-2">
     <div className="col-md-3 col-sm-5 col-12 p-2 mt-3 offset-sm-1 d-flex justify-content-start align-item-center  box">
     <img src={phone} alt="phone-icon"  className="img-fluid cicon"/>
    
        <div><p className="contact-title ">Phone</p>
            <p className="contact-text">+91 9212212129</p></div>
     </div>

     <div className="col-md-3 col-sm-5 col-12 p-2 mt-3 offset-sm-1 d-flex justify-content-start align-item-center  box">
    
      <img src={email} alt="email-icon"  className="img-fluid cicon"/>
        <div><p className="contact-title ">Email</p>
            <p className="contact-text">creater@gmail.com</p></div>
     </div>

     <div className="col-md-3 col-sm-5 col-12 p-2 mt-3 offset-sm-1  d-flex justify-content-start align-item-center  box">
    
    <img src={address} alt="address-icon"  className="img-fluid cicon"/>
      <div><p className="contact-title ">Address</p>
          <p className="contact-text">Badarpur,Delhi</p></div>
   </div>

</div>
    
   <div className=" form-box">
      <form method="POST" onSubmit={submitform}>
      <div className="row ms-2 me-2">
       <div className="col-sm-4 col-auto">
  <input type="text"  className="form-control mt-3 " onChange={handleform} value={userdata.name} name="name" placeholder="Your Name"/>
         </div>
         <div class="col-sm-4 col-auto">
         <input type="email" className="form-control mt-3 "  onChange={handleform}  value={userdata.email} name="email"  placeholder=" Your Email"/>
      </div>   
         <div class="col-sm-4 col-auto">
         <input type="number" className="form-control mt-3 "  onChange={handleform}  value={userdata.number} name="number"  placeholder=" Your Number"/>
      </div>     
 
 
</div>
<div className="row ms-2 mt-3 me-2">
<div className="col ">
<textarea  placeholder="Message" value={userdata.message} name="message" onChange={handleform} className="form-control"   rows="6"></textarea>
</div>
</div>
<div className="row ms-2 mt-3 me-2 ">
<div className="col">
<button type="submit" className="btn btn-primary mb-3"> submit message</button>
</div>
</div>
</form>
   </div>


  </div>
  );
}

export default Contact;