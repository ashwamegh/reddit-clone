import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";

import "./index.css";
import registerServiceWorker from "./utils/registerServiceWorker";
import Routes from "./routes.js";

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById("root")
);
registerServiceWorker();
