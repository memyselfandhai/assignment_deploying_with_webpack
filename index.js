import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Greeting = ({ name }) => <p className="greet">Hello, {name}!</p>;

const ApiData = () => {
  fetch("https://swapi.co/api/people/1")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => {
      // this.setState({ display: json });
      //console.log(this);
      return json;
    });
};
ReactDOM.render(<ApiData />, document.getElementById("root"));
