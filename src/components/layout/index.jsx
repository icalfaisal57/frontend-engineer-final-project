import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
	return (
		<>
			<main>
				<Container>{props.children}</Container>
			</main>
			<Footer></Footer>
		</>
	);
}
export default Layout;
