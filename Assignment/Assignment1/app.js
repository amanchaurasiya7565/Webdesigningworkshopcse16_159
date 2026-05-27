let mode=document.querySelector("#Mode");
let body = document.querySelector("body");
let currMode="Light";
mode.addEventListener("click",()=>{
   if(currMode==="Light"){
    currMode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }
   else{
    currMode="Light";
   body.classList.add("light");
   body.classList.remove("dark");
   }

   console.log(currMode)
});




// mode.addEventListener("click",()=>{
//    if(currMode==="Light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";
//    }
//    else{
//     currMode="Light";
//     document.querySelector("body").style.backgroundColor="white";
//    }

//    console.log(currMode)
// });