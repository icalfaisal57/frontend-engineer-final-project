import Province from "../Province/Province";
import { v4 as uuidv4 } from "uuid";
import StyledTables from "./Tables.styled";

function Tables(props) {
	const {choices,setChoice} = props;
	// console.log(choices)
	
	return (
		<StyledTables>
			<div className="container">
				<div className="header">
					Provinsi
					<div className="subheader">
						Data Covid Berdasarkan Provinsi
					</div>
				</div>
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Provinsi</th>
								<th>Positif</th>
								<th>Sembuh</th>
								<th>Meninggal</th>
								<th>Dirawat</th>
							</tr>
						</thead>
						<tbody>
							{choices.map((province) => {
								return <Province key={uuidv4()} province={province} />;
							})}
						</tbody>
					</table>
				</div>
			</div>
		</StyledTables>
	);
}

export default Tables;
