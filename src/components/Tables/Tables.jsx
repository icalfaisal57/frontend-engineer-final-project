import styles from "./Tables.module.css";
import data from "../../utils/constants/provinces";
import Province from "../Province/Province";
import { v4 as uuidv4 } from "uuid";
function Tables() {
	const tables = data.provinces;
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				Provinsi
				<div className={styles.subheader}>Data Covid Berdasarkan Provinsi</div>
			</div>
			<div className={styles.table}>
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
						{tables.map((province) => {
							return <Province key={uuidv4()} province={province} />;
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Tables;
