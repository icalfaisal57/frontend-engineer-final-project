import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
	return (
		<StyledNavbar>
			<div className="container">
				<nav className="navbar">
					<h2 className="navbar__brand">Covid App</h2>
					<ul className="navbar__list">
						<li className="navbar__item">
							<Link className="Navbar__link" to="/">
								Global
							</Link>
						</li>
						<li className="navbar__item">
							<Link className="Navbar__link" to="/indonesia">
								Indonesia
							</Link>
						</li>
						<li className="navbar__item">
							<Link className="Navbar__link" to="/provinsi">
								Provinsi
							</Link>
						</li>
						<li className="navbar__item">
							<Link className="Navbar__link" to="/about">
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</StyledNavbar>
	);
}

export default Navbar;
