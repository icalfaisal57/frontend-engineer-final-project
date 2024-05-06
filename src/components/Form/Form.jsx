import styles from "./Form.module.css";
import dataa from "../../utils/constants/indonesia";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function Form(props) {
	const {choices, setChoice} = props;
	const [provinsi, setProvinsi] = useState("");
	const statuschoice = dataa.indonesia;
	const [stats, setStats] = useState("");
	const [jumlah,setJumlah]=useState("")

	//membuat state untuk jumlah
	function handleJumlah(event){
		setJumlah(event.target.value)
		console.log(jumlah)
	}
	// //membuat state untuk mengambil provinsi
	function handleProvinsi(event) {
		setProvinsi(event.target.value);
	}

	// //membuat state untuk status
	function handleStats(event) {
		setStats(event.target.value);
	}

	//handle submit
	function handleSubmit(e) {
		e.preventDefault();
		const jumlahINT = parseInt(jumlah);
		const updatedData = choices.map((item) => {
			if (item.kota === provinsi) {
				if (stats === "Positif") {
					return {
						...item, // Salin semua properti dari objek item
						kasus: item.kasus + jumlahINT, // Tambah jumlahINT ke jumlahINT kasus positif
						dirawat: item.dirawat + jumlahINT, // Tambah jumlahINT ke jumlahINT yang dirawat
					};
				} else if (stats === "Sembuh") {
					return {
						...item,
						dirawat: item.dirawat - jumlahINT, //jika pasien sembuh maka data pasien yang dirawat berkurang
						kasus: item.kasus - jumlahINT,
						sembuh: item.sembuh + jumlahINT,
					};
				} else {
					return {
						...item,
						dirawat: item.dirawat - jumlahINT,
						kasus: item.kasus - jumlahINT,
						meninggal: item.meninggal + jumlahINT,
					};
				}
				return item;
			}
			return item;
		});
		setChoice(updatedData);
	}

	return (
		<div className={styles.container}>
			<div className={styles.formcontainer}>
				<div className={styles.left}>
					<div className={styles.image}>
						<img src="src/assets/3.svg" alt="" />
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.form}>
						<h2>Form Covid</h2>
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor="select1" className={styles.label}>
									Provinsi :
								</label>
								<select className={styles.select} onChange={handleProvinsi}>
									<option value="">{provinsi}</option>
									{choices.map((choice) => {
										return (
											<option
												key={uuidv4()}
												className={styles.select_option}
												choice={choice}
												value={choice.kota}>
												{choice.kota}
											</option>
										);
									})}
								</select>
							</div>
							<div>
								<label htmlFor="select2" className={styles.label}>
									Status
								</label>
								<select className={styles.select} onChange={handleStats}>
									<option value="">{stats}</option>
									{statuschoice.map((status) => {
										return (
											<option
												key={uuidv4()}
												className={styles.select_option}
												status={status}
												value={status.status}>
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
									<input type="number" value={jumlah} onChange={handleJumlah} className={styles.select}/>
							</div>
							<div className={styles.buttonform}>
								<button type="submit" className={styles.button}>
									Submit
								</button>
								<p></p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
