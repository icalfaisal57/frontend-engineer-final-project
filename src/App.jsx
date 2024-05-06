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
	return (
		<div>
			<Navbar></Navbar>
			<Hero></Hero>
			<Main></Main>
			<Tables choices={choices} setChoice={setChoice}></Tables>
			<Form choices={choices} setChoice={setChoice}></Form>
			<Footer></Footer>
		</div>
	);
}

export default App;
