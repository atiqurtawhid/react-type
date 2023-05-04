import React from 'react';
//import from "./App.css"


//type UserTpye = {name: string; age: number; isRegister:boolean; lang:string[]}

type UserTpye1 ={
  user:{
    name: string;
    age:number;
    isRegister:boolean;
    lang:string[]
  }
}




const User=({user}:UserTpye1)=>{
  return (
  	
     <div style={{border:"2px solid green", color:"red", background:"gold"}}>
      <h1>User Name {user.name}</h1>
      <p>And Your Age is {user.age}</p>
      
      {user.isRegister? <p>User is Registered</p> : <p>User is not Registered</p>}
      <h5>
      Languages:
      {user.lang.map((language,index)=>{
        return <p key={index}> {language} </p>
      })}
      
      
      
      </h5>
      
    </div>
  	
  	)
   
  
}

export default User
