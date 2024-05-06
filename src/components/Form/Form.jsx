import styles from "./Form.module.css";
import data from "../../utils/constants/provinces";
import dataa from "../../utils/constants/indonesia";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
	const { province } = props;
	const choice = data.provinces;
	const { status } = props;
	const statuschoice = dataa.indonesia;
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.image}>
					<img src="src/assets/3.svg" alt="" />
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.form}>
					<h2>Form Covid</h2>
					<form>
						<div>
							<label htmlFor="select1" className={styles.label}>
								Provinsi :
							</label>
							<select className={styles.select}>
								{choice.map((province) => {
									return (
										<option
											key={uuidv4()}
											className={styles.select_option}
											province={province}>
											{province.kota}
										</option>
									);
								})}
							</select>
						</div>
						<div>
							<label htmlFor="select2" className={styles.label}>
								Status
							</label>
							<select className={styles.select}>
								{statuschoice.map((status) => {
									return (
										<option
											key={uuidv4()}
											className={styles.select_option}
											status={status}>
											{status.status}
										</option>
									);
								})}
							</select>
						</div>
						<div>
							<label htmlFor="select3" className={styles.label}>
								Jumlah
							</label>
							<div>
								<input
									className={styles.select}
									type="number"
									name="number-1714961802945"
									access="false"
									id="number-1714961802945"></input>
							</div>
						</div>
						<div className={styles.buttonform}>
							<button type="" className={styles.button}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
