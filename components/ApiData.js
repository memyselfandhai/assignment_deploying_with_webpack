import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../style.css";

// const Greeting = ({ name }) => <p className="greet">Hello, {name}!</p>;

class ApiData extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      display: {}
    };
  }

  //whenever the search component updates, this will be run
  componentdidMount() {
    fetch(`https://swapi.co/api/people/1/`)
      .then(function(response) {
        console.log("making a fetch=>");
        return response.json();
      })
      .then(function(json) {
        console.log("json=>", json);
        this.setState({ display: json });
      });
  }

  display(json) {
    if (json.results) {
      return json.results.map(item => {
        return (
          <ul>
            <li>{item.name}</li>
            <li>{item.mass}</li>
            <li>{item.height}</li>
            <li>{item.hair_color}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }
  //
  render() {
    if (this.state.display) {
      //Remember --> you cannot render objects just like that! So, we use JSON.stringify here
      return <div>{this.display(this.state.display)}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default ApiData;
