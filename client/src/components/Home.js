import React,{useState,useEffect} from "react";

function Home (){
 
 
  const [user,setdata]=useState('');
  const [show,setshow]=useState(false);
  const callhomePage =async ()=>{
    
       const res= await fetch("/home",{
         method:"GET",
         header:{
       
           "Content-Type":"application/json"
         }
        
       });
     
       const data = await res.json();

      if(res.status === 200){
        setdata(data.name);
        setshow(true);
      }
   
  }  
  
  useEffect(()=> {
    callhomePage();
  },[]);
  

  return (
      <div className="home">
      <div className="home-text">
      <form method="GET">
      <p className="phome"> welcome </p>
      <h1>{user}</h1>

       <h3 className="hhome"> {show ? "Nice to see you again" : "We are Mern Developer"}</h3>
       </form>
      </div>
      
       </div>
  )
  ;
}

export default Home;