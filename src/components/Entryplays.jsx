import React from "react";
import "../components_css/Entryplays.css";
import DevicesIcon from '@material-ui/icons/Devices';

export default function Plays(){

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

  return(
    <div className="entry">
        <div className="entry_heading">
        <h2> C developer </h2>
        <DevicesIcon />
        </div>

        <div className="plays_info">
        <p> Challenge starts in :<span> {today} </span> .</p>
        <button className="free_submit"> Participate  </button> 
        </div> 
   </div>
  );
}