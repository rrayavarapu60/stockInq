import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";

const ROOT = document.querySelector(".container");

ReactDOM.render(
	<BrowserRouter>
		<App name="Ram" />{" "}
	</BrowserRouter>,
	ROOT
);
