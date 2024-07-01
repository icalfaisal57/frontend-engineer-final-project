import React from "react";
import StyledRegion from "./Region.styled";

function Region(props){
    const {region} = props
	return (
		<StyledRegion>
			<div className="card">
				<div className="title">{region.name}</div>
				<div className="details">
					<div className="detail">
						<span className="label">Confirmed</span>
						<span className="number_c">{region.numbers.confirmed}</span>
					</div>
					<div className="detail">
						<span className="label">Recovered</span>
						<span className="number_r">{region.numbers.recovered}</span>
					</div>
					<div className="detail">
						<span className="label">Death</span>
						<span className="number_d">{region.numbers.death}</span>
					</div>
				</div>
			</div>
		</StyledRegion>
	);
};

export default Region;
