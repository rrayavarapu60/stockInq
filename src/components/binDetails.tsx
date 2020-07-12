import React, { Component, FunctionComponent } from "react";
import { Formik } from "formik";

const BinDetails: FunctionComponent = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6 col-sm-3">
					<input
						type="text"
						className="form-control"
						placeholder="Bin Number"
						aria-label="Username"
						aria-describedby="basic-addon1"
					></input>
				</div>
				<div className="col-6 col-sm-3">
					<input
						type="text"
						className="form-control"
						value="12-3-45"
						aria-describedby="basic-addon1"
					></input>
				</div>
			</div>
		</div>
	);
};

export default BinDetails;
