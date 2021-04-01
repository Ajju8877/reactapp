import React from "react";
import "../components_css/Admin.css";

export default function Admin() {
  return (
    <div className="admin">
      <form>
        <input
          type="text"
          name="heading"
          id="heading"
          placeholder="Enter the Contest Heading"
          value=""
          required
        />{" "}
        <br />
        <input
          type="text"
          name="timing"
          id="timing"
          placeholder="Enter the Contest Timing "
          value=""
          required
        />{" "}
        <br />
        <button type="submit"> Send </button>
      </form>
    </div>
  );
}
