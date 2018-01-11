import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = { display: {} };
  }

  componentWillUpdate() {
    fetch("https://swapi.co/api/people/1")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("json => ", json);
        this.setState = { display: json };
        return json;
      });
  }

  render() {
    return (
      <div>
        <p />
      </div>
    );
  }
}

export default People;
