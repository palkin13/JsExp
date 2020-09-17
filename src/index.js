import React from "react";
import ReactDOM from "react-dom";

// const fname = "Palkin";
// const lname = "Khurana";
// const no = 13;
const YOURNAME = "Palkin";
const currentDate = new Date();
//console.log(currentDate);
const year = currentDate.getFullYear();


// ReactDOM.render(
//   <div>
//     <h1>Hello {fname} {lname}!</h1>
//     <h1>Hello {fname + " " + lname}!</h1>

//     {/* ES6 TEMPLATE LITERALS */}
//     <h1>Hello {`${fname} ${lname}`}!</h1>

//     <p> My lucky number is {no} </p>
//     <p> My number {3 * 5} </p>
//     <p> My lucky no is {Math.floor(Math.random() * 10)} </p>
//   </div>,
//   document.getElementById("root")
// );
 
// CHALLANGE
ReactDOM.render(
  <div>
    <p> Created by {YOURNAME}.</p>
    <p> Copyright {year}.</p>

  </div>,
document.getElementById("root")
);