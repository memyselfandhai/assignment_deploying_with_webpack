// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// import App from "./components/App";
//
// // ReactDOM.render(<Greeting name="Vlad" />, document.getElementById("root"));
//
// ReactDOM.render(<App />, document.getElementById("root"));

//

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
// import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

//
