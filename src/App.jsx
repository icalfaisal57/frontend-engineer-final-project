import HomePage from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Tables from "./components/Tables/Tables";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Hero></Hero>
			<Main></Main>
			<Tables></Tables>
			<Form></Form>
			<Footer></Footer>
		</div>
	);
}

export default App;
