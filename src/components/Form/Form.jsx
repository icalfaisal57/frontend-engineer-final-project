import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import StyledForm from "./Form.styled";

function Form(props) {
	const {choices, setChoice} = props;
	const [provinsi, setProvinsi] = useState("");
	const {statuschoice,setSummary} = props;
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
			}
			return item;
		});
		setChoice(updatedData);
		//menambah kondisi untun mengupdate summary
		const updatedSummary = statuschoice.map((item) => {
			if (stats === "Positif") {
				if (item.status === stats) {
					return {
						...item,
						total: item.total + jumlahINT,
					};
				}
			} else if (stats === "Meninggal") {
				if (item.status === stats) {
					return {
						...item,
						total: item.total + jumlahINT,
					};
				}
				return {
					...item,
					total: item.total - jumlahINT,
				};//jumlah positif akan berkurang jika yang meninggal bertambah
			} else if (stats === "Sembuh") {
				if (item.status === stats) {
					return {
						...item,
						total: item.total + jumlahINT,
					};
				}
				return {
					...item,
					total: item.total - jumlahINT,
				};//jumlah positif akan berkurang jika yang sembuh bertambah
			} 
			return item;
		});
		setSummary(updatedSummary);
	}

	return (
		<StyledForm>
			<div className="container">
				<div className="formcontainer">
					<div className="left">
						<div className="image">
							<img src="src/assets/3.svg" alt="" />
						</div>
					</div>
					<div className="right">
						<div className="form">
							<h2>Form Covid</h2>
							<form onSubmit={handleSubmit}>
								<div>
									<label htmlFor="select1" className="label">
										Provinsi :
									</label>
									<select className="select" onChange={handleProvinsi}>
										<option value="">{provinsi}</option>
										{choices.map((choice) => {
											return (
												<option
													key={uuidv4()}
													className="select_option"
													choice={choice}
													value={choice.kota}>
													{choice.kota}
												</option>
											);
										})}
									</select>
								</div>
								<div>
									<label htmlFor="select2" className="label">
										Status
									</label>
									<select className="select" onChange={handleStats}>
										<option value="">{stats}</option>
										{statuschoice.map((status) => {
											return (
												<option
													key={uuidv4()}
													className="select_option"
													status={status}
													value={status.status}>
													{status.status}
												</option>
											);
										})}
									</select>
								</div>
								<div>
									<label htmlFor="select3" className="label">
										Jumlah
									</label>
									<input
										type="number"
										value={jumlah}
										onChange={handleJumlah}
										className="select"
									/>
								</div>
								<div className="buttonform">
									<button type="submit" className="button">
										Submit
									</button>
									<p></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</StyledForm>
	);
}

export default Form;
