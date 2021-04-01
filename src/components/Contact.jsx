import React from "react";
import "../components_css/Contact.css";

export default function Contact(){
  return(
<div className="contact">
   <div className="contact_details">
        <div>
          <p><span>Email :</span><br/>coding.cypher@gmail.com</p>
        </div>
        <div>
          <p><span>Mobile :</span><br/>8104767040</p>
        </div>
        <div>
          <p><span>Address :</span><br/>sunrise bussiness park, vileparle west - 400075</p>
        </div>
     </div>
          <div className="heading">
        
              <h3> Get In Touch  </h3>
            </div>
     <div className="contact_form">
         <form>
          <div>
           <label> Name :</label> <br/>
           <input type="text"name="name"id="name"placeholder="Enter Your Name"/>
           </div>
          
           <div>
           <label> Email :</label> <br/>
           <input type="email"name="email"id="email"placeholder="Enter Your Email"/>
           </div>

           <div>
           <label> Mobile :</label> <br/>
           <input type="number"name="mobile"id="mobile"placeholder="Enter Your Mobile No."/>
           </div>

          
           <div>
           <label> Tell Us :</label> <br/>
           <textarea/>
           </div>
             <br/>
           <button type="submit"> Send </button>
         </form>
      </div> 
     
</div>
  );
}