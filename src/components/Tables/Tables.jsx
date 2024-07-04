// src/components/Tables/Tables.js
import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import StyledTables from "./Tables.styled";
import TableContext from "../../Context/TableContext";

function Tables() {
	const { provinces, setProvinces } = useContext(TableContext);

	useEffect(() => {
		// Fetch data from API
		async function fetchData() {
			try {
				const response = await axios.get(
					"https://covid-fe-2023.vercel.app/api/indonesia.json"
				);
				setProvinces(response.data.regions);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchData();
	}, [setProvinces]);

	return (
		<StyledTables>
			<div className="container">
				<div className="header">Situation by Provinces</div>
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>No</th>
								<th>Provinsi</th>
								<th>Positif</th>
								<th>Sembuh</th>
								<th>Dirawat</th>
								<th>Meninggal</th>
							</tr>
						</thead>
						<tbody>
							{provinces.map((province, index) => (
								<tr key={uuidv4()}>
									<td>{index + 1}</td>
									<td>{province.name}</td>
									<td>{province.numbers.confirmed}</td>
									<td>{province.numbers.recovered}</td>
									<td>{province.numbers.treatment}</td>
									<td>{province.numbers.death}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</StyledTables>
	);
}

export default Tables;
