import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faArrowRightLong,
  faHouse,
  faFile,
  faChevronRight,
  faChevronLeft,
  faCircleNotch,
  faEnvelope,
  faBars,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faArrowRightLong,
  faHouse,
  faFile,
  faChevronRight,
  faChevronLeft,
  faCircleNotch,
  faEnvelope,
  faBars,
  faPowerOff
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
