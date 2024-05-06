import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Tables from "./components/Tables/Tables";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import data from "./utils/constants/provinces";
import dataa from "./utils/constants/indonesia";

function App() {
	const [choices, setChoice] = useState(data.provinces);
	const [statuschoice, setSummary] = useState(dataa.indonesia);

	return (
		<div>
			<Navbar></Navbar>
			<Hero></Hero>
			<Main statuschoice={statuschoice} setSummary={setSummary}></Main>
			<Tables choices={choices} setChoice={setChoice}></Tables>
			<Form
				choices={choices}
				setChoice={setChoice}
				statuschoice={statuschoice}
				setSummary={setSummary}></Form>
			<Footer></Footer>
		</div>
	);
}

export default App;
