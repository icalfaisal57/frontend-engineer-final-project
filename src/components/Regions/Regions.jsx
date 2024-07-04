import React, { useContext, useEffect } from "react";
import Region from "../Region/Region";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ENDPOINTS from "../../utils/constants/endpoint";
import RegionContext from "../../Context/RegionContext";
import StyledRegions from "./Regions.styled";

function Regions() {
	const { regions, setRegions } = useContext(RegionContext);

	useEffect(() => {
		getRegions();
	}, []);

	async function getRegions() {
		const response = await axios.get(ENDPOINTS.GLOBALS);
		setRegions(response.data.regions);
	}

	return (
		<StyledRegions>
			<div className="container">
				{regions.map((region) => (
					<div key={uuidv4()}>
						<Region region={region} />
					</div>
				))}
			</div>
		</StyledRegions>
	);
}

export default Regions;
