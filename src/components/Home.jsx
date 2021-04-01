import React from "react";
import Entryplays from "./Entryplays";
import Proplays from "./Proplays";
import "../components_css/Home.css";

export default function Home(){
  return(
<div className="home">
  
 <div className="home_heading"> 
  <h2>Entry Level Coding Challanges </h2>
</div>
 <div className="home_entry_plays">
    <Entryplays />
    <Entryplays />
    <Entryplays />
    <Entryplays />
  </div>
   <div className="pic">
       <h6> Boost-up your skills and paricipate in Pro-Coding Challanges, Get multiple Rewards , Set-Points and opportunity to get Hired by Multiple Companies. <span> ( Read More... ) </span></h6>
       <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"alt="home_pic" />
   </div>

  <div className="home_heading">
 <h2> Pro Level Coding Challanges </h2>
 </div> 
  <div className="home_pro_plays">
    <Proplays />
    <Proplays />
    <Proplays />
    <Proplays />
  </div>

</div>
  );
}