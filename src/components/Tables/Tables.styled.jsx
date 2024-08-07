import styled from "styled-components";

const StyledTables = styled.div`
	/* small screen */
	.container {
		margin: 1rem;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 2.441rem;
		color: #06d6a0;
	}
	.subheader {
		font-size: large;
		color: #118ab2;
	}

	.table {
		width: 100%;
		border-collapse: collapse;
		margin: 20px 0;
		font-size: 18px;
		text-align: center;
		overflow-x: auto;
	}

	.table th {
		color: #06d6a0;
		padding: 12px;
	}
	.table td {
		padding: 12px;
		border-bottom: 1px solid #ddd;
	}

	.table th {
		background-color: #f2f2f2;
	}

	/* medium screen */
	@media (min-width: 768px) {
		.table {
			width: 100%;
			max-width: 1000px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	/* large screen */
	@media (min-width: 992px) {
		.table {
			width: 100%;
			max-width: 1000px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: auto;
		}
		.table th,
		td {
			padding: 25px;
		}
	}
`;

export default StyledTables;
