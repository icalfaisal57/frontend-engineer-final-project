import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Tables from "./components/Tables/Tables";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import data from "./utils/constants/provinces";
import GlobalContext from "./Context/GlobalContext";
import Regions from "./components/Regions/Regions";
import RegionContext from "./Context/RegionContext";
import Layout from "./components/layout";
import Home from "./pages/Home/Home";
import Indonesia from "./pages/Home/Covid/Indonesia";
import Provinsi from "./pages/Home/Covid/Provinsi";
import About from "./pages/Home/Covid/About";
import { HelmetProvider } from "react-helmet-async";

function App() {
	const [choices, setChoice] = useState(data.provinces);
	// const [statuschoice, setSummary] = useState(dataa.indonesia);
	const [globals,setGlobals] = useState([])
	const [regions, setRegions] = useState([]);
	const contextValue = {
		globals,
		setGlobals,
		regions,
		setRegions
	}

	return (
		<HelmetProvider>
			<div>
				<GlobalContext.Provider value={contextValue}>
					<RegionContext.Provider value={contextValue}>
						<Navbar></Navbar>
						<Layout>
							<Routes>
								<Route path="/" element={<Home></Home>}></Route>
								<Route
									path="/indonesia"
									element={<Indonesia></Indonesia>}></Route>
								<Route path="/provinsi" element={<Provinsi></Provinsi>}></Route>
								<Route path="/about" element={<About />}></Route>
							</Routes>
						</Layout>
					</RegionContext.Provider>
				</GlobalContext.Provider>
			</div>
		</HelmetProvider>
	);
}

export default App;
