import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Student() {
  
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#edf4f0",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          color: "black",
        }}
      >
       Student Information
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            width: "350px",
            height:"200px",
            border: "1px solid #b7b5b5",
            
            borderRadius: "10px",
            overflow: "hidden",
            margin: "25px",
            backgroundColor: "#ffffff",
            boxShadow: " 0px 2px 6px 6px rgba(116, 111, 111, 0.2)",
          }}
        >
         <p style={{fontSize:"30px",color:"purple",marginTop:"40px",fontWeight:"bold"}}>Shivang Gupta</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"25px"}}>Course : Computer Science</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"20px"}}>Marks : 98</p>

        </div>

        {/* Card 2 */}
        <div
          style={{
            width: "350px",
            height:"200px",
            border: "1px solid #b7b5b5",
           
            borderRadius: "10px",
            overflow: "hidden",
            margin: "25px",
            backgroundColor: "#ffffff",
            boxShadow: " 0px 2px 6px 6px rgba(116, 111, 111, 0.2)"
          }}
        > 
         <p style={{fontSize:"30px",color:"purple",marginTop:"40px",fontWeight:"bold"}}>Aman Chaurasiya</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"25px"}}>Course : Computer Science</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"20px"}}>Marks : 95</p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            width: "350px",
            height:"200px",
            border: "1px solid #b7b5b5",
            
            borderRadius: "10px",
            overflow: "hidden",
            margin: "25px",
            backgroundColor: "#ffffff",
            boxShadow: " 0px 2px 6px 6px rgba(116, 111, 111, 0.2)"
          }}
        >
         <p style={{fontSize:"30px",color:"purple",marginTop:"40px",fontWeight:"bold"}}>Ansh Prajapati</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"25px"}}>Course : Data Science</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"20px"}}>Marks : 96</p> 
        </div>
        {/* Card 4 */}
        <div
          style={{
           width: "350px",
            height:"200px",
            border: "1px solid #b7b5b5",
            
            borderRadius: "10px",
            overflow: "hidden",
            margin: "25px",
            
            backgroundColor: "#ffffff",
             boxShadow: " 0px 2px 6px 6px rgba(116, 111, 111, 0.2)"
          }}
        >
         <p style={{fontSize:"30px",color:"purple",marginTop:"40px",fontWeight:"bold"}}>Kunal Singh</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"25px"}}>Course : Computer Science</p>
         <p style={{fontSize:"20px",color:"black",marginTop:"20px"}}>Marks : 97</p> 
        </div>
      </div>
    </div>
  );
    
}

export default Student;


