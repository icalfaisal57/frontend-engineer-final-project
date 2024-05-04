import styles from "./Main.module.css";

function Main() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>Indonesia</div>
			<div className={styles.subhead}>Data Covid Berdasarkan Indonesia</div>
			<div className={styles.row}>
				<div className={styles.list}>
					Confirmed
					<div className={styles.confirmed}>123</div>
				</div>
				<div className={styles.list}>
					Recovered
					<div className={styles.recovered}>132</div>
				</div>
				<div className={styles.list}>
					Death
					<div className={styles.death}>123</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
