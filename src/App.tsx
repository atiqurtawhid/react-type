import React from 'react';
import {useState} from "react"
import User from "./components/User/User"
import UserDemo from "./components/UserDemo/UserDemo"
import DataFetch from "./components/DataFetch/DataFetch"
import Button from "./components/Button/Button"
import ButtonStyle from "./components/ButtonStyle/ButtonStyle"
import Post from "./components/Post/Post"

type Userr ={
  age:number,
  name:string
}

function App() {
  
  const [count, setCount] = useState(0)
  const [user, setUser] = useState<null | Userr>(null)
  const [userss, setUsers] = useState<Userr>({} as Userr)
  
  const addHendlerUser =()=>{
   setUser({age:33, name:"Atiqur Rahman"})
    
  }
  const addHendlerUser2 =()=>{
   setUsers({age:33, name:"Atiqur Rahman"})
    
  }
  
  
  const btnStyle ={
    color:"blue",
    background:"red",
    padding:"10px",
    margin:"10px"
  }
  
  const users =[
    {
      id:1,
      name:"Tawhid Afridi",
      age:2,
      email:"tawhidbd1334@gmail.com",
      mobile:"01683040540",
      home:"Bogura",
      isRegister:true
    },
    
    {
      id:2,
      name:"Tamim Ikbal",
      age:32,
      email:"tawhidbd1334@gmail.com",
      mobile:"01683040540",
      home:"Bogura",
      isRegister:false
    },
    
    {
      id:3,
      name:"Mahid khan",
      age:15,
      email:"tawhidbd1334@gmail.com",
      mobile:"01683040540",
      home:"Bogura",
      isRegister:true
    },
    
    {
      id:4,
      name:"Jonson vilt",
      age:45,
      email:"tawhidbd1334@gmail.com",
      mobile:"01683040540",
      home:"Bogura",
      isRegister:true
    },
    
    {
      id:5,
      name:"Doly Akter",
      age:25,
      email:"tawhidbd1334@gmail.com",
      mobile:"01683040540",
      home:"Bogura",
      isRegister:true
    },
    ]
  
  
  
  const user1={
    name:"Atiqur Rahman",
    age:33,
    isRegister:true,
    lang:["JavaScript","Python","Rust"]
  }
  const user2={
    name:"Tawhid Afridi",
    age:2,
    isRegister:true,
    lang:["JavaScript","Python","Rust", "React"]
  }
  const user3={
    name:"Doly Akter",
    age:25,
    isRegister:false,
    lang:["JavaScript","Python","Rust", "Typescript"]
  }
  return (
    <div>
      <h1>Welcome To User Name </h1>
      
     <User user={user1} />
     <User user={user2} />
     <User user={user3} />
      
      <UserDemo users={users}/>
      
      
      
     <br/>
     
     
     <DataFetch status="success"/>
     
     <Button>Click now </Button>
     <Post/> 
     
     <ButtonStyle myBtn={btnStyle}></ButtonStyle>
     
      
      
      
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Dcrease</button>
      
      <h2>
      
      
      {user?.name}
      
      
      </h2>
      <h2>
      
      
      {user?.age}
      
      
      </h2>
      
      <p>{userss.name}</p>
      <p>{userss.age}</p>
      
      
      
      
      <button onClick={addHendlerUser}>Add user 1</button>
      <button onClick={addHendlerUser2}>Add user 2</button>
      
    </div>
  );
}

export default App;
