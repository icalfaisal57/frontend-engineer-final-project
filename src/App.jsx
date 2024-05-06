import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Tables from "./components/Tables/Tables";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import data from "./utils/constants/provinces";

function App() {
	const [choices, setChoice] = useState(data.provinces);
//pada console data sudah berhasil ditambahkan tetapi pada table tidak berganti, saya bingung.
	return (
		<div>
			<Navbar></Navbar>
			<Hero></Hero>
			<Main></Main>
			{/* <Tables choices={choices} setChoice={setChoice}></Tables> */}
			{/* karena tabel tidak update saat dipisah, saya juga gatau kenapa jadi saya pindahkan kode tabel ke form, masalah selesai. */}
			<Form choices={choices} setChoice={setChoice}></Form>
			<Footer></Footer>
		</div>
	);
}

export default App;
