import React, { Component, FC, FunctionComponent } from "react";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header: FunctionComponent = () => {
	const history = useHistory();
	const setRouterPath = (binname: string) => {
		history.push(`/Bindetails/$binname`);
	};
	const formik = useFormik({
		initialValues: {
			binName: "",
		},

		onSubmit: (values) => {
			setName(values.binName);
			setRouterPath(values.binName);
		},
	});

	const [name, setName] = useState("InitialBin");

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="frame">
				<div className="input">
					<label htmlFor="binName"> Bin Name</label>{" "}
					<input
						id="binName"
						name="binName"
						type="binName"
						onChange={formik.handleChange}
						value={formik.values.binName}
						className=".btm-sm"
					/>{" "}
				</div>

				<p className="align">
					<button className="btn btn-secondary btn-sm" type="button">
						Submit
					</button>
				</p>
			</div>
		</form>
	);
};

export default Header;
