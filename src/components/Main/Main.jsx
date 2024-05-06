import styles from "./Main.module.css";
import data from "../../utils/constants/indonesia";
import Indonesia from "../Indonesia/Indonesia";
import { v4 as uuidv4 } from "uuid";

function Main() {
	const indo = data.indonesia;

	return (
		<div className={styles.container}>
			<div className={styles.header}>Indonesia</div>
			<div className={styles.subhead}>Data Covid Berdasarkan Indonesia</div>
			<div className={styles.row}>
					{indo.map((indonesia) => {
						return (
							<div className={styles.list} key={uuidv4()}>
								<Indonesia indonesia={indonesia} />
							</div>
						);
					})}
				
			</div>
		</div>
	);
}

export default Main;
