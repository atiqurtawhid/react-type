


type UserDemoProps ={
  users:{
    id: number;
    name: string;
    age: number;
    email:string;
    mobile:string;
    home:string;
    isRegister:boolean;
  }[]
}


const UserDemo=({users}:UserDemoProps)=>{
  return(
    
    <div>
    
    {
      users.map(user=>{
      const {id,name,age,email,home,mobile,isRegister}=user;
        return (
        
        <div style={{background:"skyblue"}} key={id}>
        
        <h1>Name: {name}</h1>
        <h3>Id :{id}</h3>
        <h3>Enail :{email}</h3>
        <h3>Age :{age}</h3>
        <h3>Mobile :{mobile}</h3>
        <h3>Home :{home}</h3>
        
        {
          isRegister ? <h2>User Registration ok</h2> : <h2>User Registration Not Ok</h2>
        }
        
        
        </div>
        
        
        
        )
      })
    }
    
    
    
    </div>
    
    
    
    )
}


export default UserDemo;