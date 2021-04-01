import React from "react";
import "../components_css/Login.css";

export default function Login() {
  return (
    <div className="login">
      <h2> Login Here ! </h2>
      <div className="login_form">
        <form>
        <div className="inputs">
          <label className="label"> Email* </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email_ID"
            autoComplete="off"
          />{" "}
        </div>

        <label className="label"> Password* </label>
        <br />
        <div className="inputs">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your password"
            autoComplete="off"
          />{" "}
        </div>

        <button type="submit"> SUBMIT </button>
 
        </form>
      </div>
    </div>
  );
}
