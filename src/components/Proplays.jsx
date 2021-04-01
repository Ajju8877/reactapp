import React from "react";
import "../components_css/Proplays.css";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';


export default function Plays(){

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;



  return(
    <div className="pro">
        <div className="pro_heading">
        <h2> C developer </h2>
        <DeveloperModeIcon />
        </div>

        <div className="pro_plays_info">
        <p> Challenge starts in :<span> {today} </span> .</p>
        <button className="pro_submit"> Participate  </button> 
        </div> 
   </div>
  );
}