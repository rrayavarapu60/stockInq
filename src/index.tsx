import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import "bootstrap/dist/css/bootstrap.css";


const ROOT =  document.querySelector(".container");

ReactDOM.render(<App name="Ram" />, ROOT)