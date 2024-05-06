import styless from "./Tables.module.css";
import Province from "../Province/Province";
import { v4 as uuidv4 } from "uuid";

function Tables(props) {
	const {choices,setChoice} = props;
	// console.log(choices)
	
	return (
		<div className={styless.container}>
			<div className={styless.header}>
				Provinsi
				<div className={styless.subheader}>Data Covid Berdasarkan Provinsi</div>
			</div>
			<div className={styless.table}>
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
	);
}

export default Tables;
