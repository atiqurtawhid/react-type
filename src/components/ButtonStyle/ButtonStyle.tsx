import React from "react";

type ButtonStylePorops={
  myBtn:React.CSSProperties;
}

const ButtonStyle =({myBtn}:ButtonStylePorops)=>{
  return(
    
    <div>
    
    <button style={myBtn}>Click</button>
    
    
    
    </div>
    
    )
}


export default ButtonStyle;