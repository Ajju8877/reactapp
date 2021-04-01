import React from "react";
import "../components_css/Register.css";

export default function Register() {
  return (
    <div className="register">
      <h2> Register Here ! </h2>
      <div className="register_form">
        <form>
          <div className="inputs">
            <label className="label"> Name* </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              autoComplete="off"
            />{" "}
          </div>

          <br />
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

          <br />
          <div className="inputs">
            <label className="label"> Mobile* </label>
            <br />
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Enter Your Mobile_No."
              autoComplete="off"
            />{" "}
          </div>

          <br />
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

          <br />
          <label className="label"> Confirm-Password* </label>
          <br />
          <div className="inputs">
            <input
              type="password"
              name="confpass"
              id="confpass"
              placeholder="Confirm Your Password"
              autoComplete="off"
            />{" "}
            <br />
          </div>

          <button type="submit"> SUBMIT </button>
        </form>
      </div>
    </div>
  );
}
