import React from "react";
import Button from "../atoms/Button";
import axios from "../../axiosConfig";

export default function Profile() {
  function handleClick(e) {
    axios
      .get("/profile")
      .then()
      .catch((error) => console.log(error));
  }
  return (
    <div>
      Profile page
      <Button type="button" text="click me" onClick={handleClick} />
    </div>
  );
}
