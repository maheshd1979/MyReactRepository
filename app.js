import React from "react";
import ReactDOM from "react-dom/client";

const heading =React.createElement("h1",{id:"heading"},"Hello world from React from js file !")
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);   

const parent =React.createElement(
    "div",
    {id:"parent"},
  [    React.createElement("div",{id:"child1"},
  [React.createElement("h1",{},"This is a Mahesh Divekar 💖"),
  React.createElement("h2",{},"This is a h2")
]) ,    React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"This is a h1"),
React.createElement("h2",{},"This is a h2")
]) ]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 
//root.appendChild(parent);
