import React ,{useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../App";


function Logout (){
  const {state,dispatch} = useContext(UserContext);
    const history=useHistory();
useEffect(()=> {
    fetch("/logout",{
        method:"GET",
        header:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      }).then((res) => {
        if(res.status=== 200){
          dispatch({type:"USER",payload:false})
            history.push("/");
        }
      }).catch ((error) =>{
          console.log(error);
      });

    
},[]);

return (
    <h1>logout</h1>
);
}
export default Logout;