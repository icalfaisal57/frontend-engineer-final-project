import styles from "./Tables.module.css";

function Tables(){
    return (
			<div className={styles.container}>
				<div className={styles.header}>Provinsi</div>
				<div className={styles.subheader}>Data Covid Berdasarkan Provinsi</div>
				<div className={styles.table}>
					<table>
						<thead>
							<tr>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
}

export default Tables;