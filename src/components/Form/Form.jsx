// src/components/Form/Form.js
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StyledForm from "./Form.styled";
import TableContext from "../../Context/TableContext";

function Form() {
	const { provinces, setProvinces } = useContext(TableContext);
	const [provinsi, setProvinsi] = useState("");
	const [stats, setStats] = useState("");
	const [jumlah, setJumlah] = useState("");

	// Handle changes
	function handleJumlah(event) {
		setJumlah(event.target.value);
	}

	function handleProvinsi(event) {
		setProvinsi(event.target.value);
	}

	function handleStats(event) {
		setStats(event.target.value);
	}

	// Handle form submission
	function handleSubmit(e) {
		e.preventDefault();
		const jumlahINT = parseInt(jumlah);

		const updatedData = provinces.map((item) => {
			if (item.name === provinsi) {
				if (stats === "Positif") {
					return {
						...item,
						numbers: {
							...item.numbers,
							confirmed: item.numbers.confirmed + jumlahINT,
							treatment: item.numbers.treatment + jumlahINT,
						},
					};
				} else if (stats === "Sembuh") {
					return {
						...item,
						numbers: {
							...item.numbers,
							recovered: item.numbers.recovered + jumlahINT,
							treatment: item.numbers.treatment - jumlahINT,
						},
					};
				} else {
					return {
						...item,
						numbers: {
							...item.numbers,
							death: item.numbers.death + jumlahINT,
							treatment: item.numbers.treatment - jumlahINT,
						},
					};
				}
			}
			return item;
		});

		setProvinces(updatedData);
	}

	return (
		<StyledForm>
			<div className="container">
				<div className="formcontainer">
					<div className="left">
						<div className="image">
							<img src="src/assets/3.svg" alt="" />
						</div>
					</div>
					<div className="right">
						<div className="form">
							<h2>Form Covid</h2>
							<form onSubmit={handleSubmit}>
								<div>
									<label htmlFor="select1" className="label">
										Provinsi :
									</label>
									<select className="select" onChange={handleProvinsi}>
										<option value="">{provinsi}</option>
										{provinces.map((choice) => (
											<option
												key={uuidv4()}
												className="select_option"
												value={choice.name}>
												{choice.name}
											</option>
										))}
									</select>
								</div>
								<div>
									<label htmlFor="select2" className="label">
										Status
									</label>
									<select className="select" onChange={handleStats}>
										<option value="">{stats}</option>
										<option value="Positif">Positif</option>
										<option value="Sembuh">Sembuh</option>
										<option value="Meninggal">Meninggal</option>
									</select>
								</div>
								<div>
									<label htmlFor="select3" className="label">
										Jumlah
									</label>
									<input
										type="number"
										value={jumlah}
										onChange={handleJumlah}
										className="select"
									/>
								</div>
								<div className="buttonform">
									<button type="submit" className="button">
										Submit
									</button>
									<p></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</StyledForm>
	);
}

export default Form;
