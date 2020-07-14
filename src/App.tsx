import * as React from "react";
import Header from "./components/header";
import BinDetails from "./components/binDetails";
import "./app.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

type props = {
	name: string;
};

export const App: React.FunctionComponent<props> = ({ name }) => {
	return (
		<div className="content">
			<Switch>
				<Route path="/Bindetails/:Binname" component={BinDetails} />
				<Route path="/Binheader" component={Header}></Route>
				<Route path="/not-found" component={NotFound} />
				<Redirect from="/" exact to="/BinHeader" />
				<Redirect to="/not-found" />
			</Switch>
		</div>
		// 	{/* <Header />
		// 	<BinDetails />
		// </div> */}
	);
};
