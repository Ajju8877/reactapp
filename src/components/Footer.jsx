import React from "react";
import "../components_css/Footer.css";

export default function Footer(){
  const currentYear =  new Date().getFullYear();
return (
  <div className="footer">
    <div className="footer_content">
     <div className="footer_contact">
         <h6> Address : <span>sunrise bussiness park,
                        vileparle west - 400075</span> </h6>
         <h6> Email: coding.cypher@gmail.com </h6>
         <h6> Mobile: 8104767040  </h6>
      </div> 
    </div>

<div className="copyright">
   <h6> coding.cypher.copyright@{currentYear} </h6>
</div>
  </div>
);

}
