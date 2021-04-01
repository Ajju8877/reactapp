import React from "react";
import "../components_css/User.css";


export default function User() {


  return (
    <div className="user">
      <div className="userpic" id="userpic">
        {" "}<img src="WhatsApp.jpeg"alt="img"/>
      </div>
      <div className="username" id="username">
        {" "}
        <p> Ajay{" "} </p>
      </div>

      <input type="text" placeholder="uers_name" />
      <input type="file" alt="userimage" />
    </div>
  );
}
