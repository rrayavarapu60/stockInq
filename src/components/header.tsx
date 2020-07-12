import React, { Component, FC, FunctionComponent } from "react";
import { Formik, useFormik } from "formik";
import { useState } from "react";

const Header: FunctionComponent = () => {
	const formik = useFormik({
		initialValues: {
			binName: "",
		},

		onSubmit: (values) => {
			setName(values.binName);
		},
	});

	const [name, setName] = useState("InitialBin");

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="frame">
				<label htmlFor="binName"> Bin Name</label>{" "}
				<input
					id="binName"
					name="binName"
					type="binName"
					onChange={formik.handleChange}
					value={formik.values.binName}
				/>{" "}
			</div>
			<p className="align">
				<button type="submit"> Submit</button>
			</p>
		</form>
	);
};

export default Header;
