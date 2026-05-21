import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);


  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#edf4f0",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div class="card" style={{
            width: "350px",
            height:"250px",
            border: "1px solid #b7b5b5",
            
            borderRadius: "10px",
            overflow: "hidden",
            margin: "25px",
            
            backgroundColor: "#ffffff",
            boxShadow: " 0px 2px 6px 6px rgba(116, 111, 111, 0.2)",
            
            
            
          }}>
          <p style={{ fontSize:"30px",fontWeight:"bold",color:"black",marginTop:"2rem"}}>React Counter Application</p>
          <h2 style={{color:"black",fontWeight:"bold",fontSize:"30px",margin:"5px"}}> {count}</h2>

          <button style={{backgroundColor:"blue",border:"1px solid blue",borderRadius:"5px", padding: "8px 12px",margin:"12px",}}
                onClick={() => setCount(count + 1)}>
                Increment(+)
         </button>
         <button style={{backgroundColor:"blue",border:"1px solid blue",borderRadius:"5px", padding: "8px 12px",margin:"12px",}}
                onClick={() => setCount(count -1)}>
                Decrement(-)
         </button>
         <br></br>
         <button  style={{backgroundColor:"blue",border:"1px solid blue",borderRadius:"5px", padding: "8px 12px",}}
                  onClick={() => setCount(0)}>
                  Reset
         </button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Counter;
