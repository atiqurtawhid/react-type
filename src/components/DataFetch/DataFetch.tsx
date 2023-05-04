
type DataProps ={
  status: "success" | "error" | "loading";
}


const DataFetch =({status}:DataProps)=>{
  
  if(status==="error"){
    return <h1 style={{color:"red"}}>Error Please check</h1>
  }
  
 else if(status==="loading") {
   return <h1 style={{color:"yellow"}}>Data is loading .......</h1>
 }
  
  
  
  return(
    
    <div>
   
   <h1 style={{color:"green"}}>Data Fetch Successfully</h1>
    
    </div>
    
    
    
    
    )
}



export default DataFetch;