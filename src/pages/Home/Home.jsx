import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Regions from "../../components/Regions/Regions";

function Home() {
	return (
		<>
			<div>
				<Hero></Hero>
				<Main detail={"global"} title={"Global"}></Main>
				<Regions></Regions>
			</div>
		</>
	);
}

export default Home;
