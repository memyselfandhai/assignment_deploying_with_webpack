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
    this.display = this.display.bind(this);
  }

  //why does componentDidMount not call this function?
  componentWillMount() {
    fetch(`https://swapi.co/api/people`)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log("json in fetch=>", json);
        this.setState({ display: json });
      });
  }

  display(json) {
    console.log("json => in display", json);
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
    console.log("this.state => ", this.state);
    if (this.state.display) {
      //Remember --> you cannot render objects just like that! So, we use JSON.stringify here
      return (
        <div>
          {this.display(this.state.display)}
          <p onClick={this.display.bind(this)}>Test </p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default ApiData;
