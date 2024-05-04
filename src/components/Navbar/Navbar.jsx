import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<h2 className={styles.navbar__brand}>Covid App</h2>
				<ul className={styles.navbar__list}>
					<li className={styles.navbar__item}>Global</li>
					<li className={styles.navbar__item}>Indonesia</li>
					<li className={styles.navbar__item}>Provinsi</li>
					<li className={styles.navbar__item}>About</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
