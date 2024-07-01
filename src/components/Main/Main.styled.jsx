import styled from "styled-components";

const StyledMain = styled.div`
	/* Small Screen */
	.container {
		margin: 0rem;
	}

	.header {
		text-align: center;
		color: #06d6a0;
		font-size: 2.441rem;
	}

	.subhead {
		margin-bottom: 1rem;
		color: #118ab2;
		text-align: center;
	}

	.row {
		margin-bottom: 1rem;
		font-size: 2.44rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.list {
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 20px;
		text-align: center;
		width: 340px;
	}

	/* Medium Screen */
	@media (min-width: 768px) {
		.row {
			flex-direction: row;
			margin: 2 px;
			justify-content: space-around;
		}
	}

	/* Large Screen */
	@media (min-width: 992px) {
		.container {
			max-width: 1200px;
			margin: 3rem auto;
		}

		.row {
			flex-wrap: wrap;
			width: 100%;
		}
	}
`;

export default StyledMain;
