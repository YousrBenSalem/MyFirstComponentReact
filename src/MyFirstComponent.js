import React from "react";
import "./FirstComponentStyle.css";
const MyFirstComponent = () => {
  const x = 5;
  const person = {
    name: "PinguCoder",
    email: "pingucoder@gmail.com",
  };
  const elemStyle = {
    backgroundColor: "#f0e",
    padding: "1rem",
    margin: ".5rem auto",
    borderRadius: "8px",
    boxShadow: "-4px -6px #ccc, inset 7px 9px ",
  };
  return (
    <div>
      <h1 style={elemStyle}>
        {saySalam()} {person.name} developpeur
      </h1>
      <h2 className={"active"} style={{ backgroundColor: "green" }}>
        Hi {person.email}
      </h2>
      <h3 className={"active blBg"}>{x} Articles</h3>
      <button onClick={saySalam}>Click me</button>
      <h1 className={person.name == "PinguCoder" ? "blBg" : "greenBg"}>
        yosr ben salem
      </h1>
    </div>
  );
};

export default MyFirstComponent;
function saySalam() {
  return "Salem";
}
