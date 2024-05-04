import HomePage from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Tables from "./components/Tables/Tables";


function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Hero></Hero>
			<Main></Main>
      <Tables></Tables>
		</div>
	);
}

export default App;
