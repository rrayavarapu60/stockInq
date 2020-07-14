import React, { Component, FunctionComponent } from "react";
import { Formik } from "formik";

const BinDetails: FunctionComponent = () => {
	return (
		<div className="frameDetail">
			<p>
				<div className="row">
					<div className="col-1 col-sm-6">Bin Name</div>
					<div className="col-1 col-sm-6">12-23-45</div>
				</div>
			</p>
		</div>
	);
};

export default BinDetails;
