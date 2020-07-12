import * as React from "react";
import Header from "./components/header";
import BinDetails from "./components/binDetails";
import "./app.css";

type props = {
	name: string;
};

export const App: React.FunctionComponent<props> = ({ name }) => {
	return (
		<div>
			<h1>
				{" "}
				<span className="badge badge-primary"> Primary</span> from functional
				component {name}
			</h1>{" "}
			<Header />
			<BinDetails />
		</div>
	);
};
