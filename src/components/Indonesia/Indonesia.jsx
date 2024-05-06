import styles from "./Indonesia.module.css";

function Indonesia(props) {
	const { indonesia } = props;
	return (
		<div className={styles.container}>
			<div className={styles.head}>{indonesia.status}</div>
			<div className={styles.sub}>{indonesia.total}</div>
		</div>
	);
}
export default Indonesia;