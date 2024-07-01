import styled from "styled-components";

const StyledNavbar = styled.div`
	/* Small Screen */
	.container {
		background-color: #06d6a0;
		padding: 1rem;
		color: #fff;
	}

	.navbar {
		display: flex;
		flex-direction: column;
		text-align: justify;
	}

	.navbar__brand {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}

	.Navbar__link {
		text-decoration: none;
		color: #fff;
	}

	.navbar__list {
		display: flex;
		flex-direction: column;
		list-style: none;
	}

	.navbar__item {
		margin-bottom: 1rem;
	}

	/* Medium Screen */
	@media (min-width: 768px) {
		.navbar {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.navbar__brand {
			margin-bottom: 0;
		}

		.navbar__list {
			flex-direction: row;
		}

		.navbar__item {
			margin: 0 1rem;
		}
	}

	/* Large Screen */
	@media (min-width: 992px) {
		.container {
			margin: auto;
		}
	}
`;

export default StyledNavbar;
