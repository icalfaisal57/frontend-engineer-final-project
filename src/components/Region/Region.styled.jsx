import styled from "styled-components";

const StyledRegion = styled.div`
	.card {
		background: white;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		padding: 16px;
		text-align: center;
		width: 300px;
		margin: 10px;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 16px;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.detail {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.label {
		font-size: 14px;
		color: #757575;
	}
	.number_d {
		font-size: 16px;
		font-weight: bold;
		color: #ef476f;
	}
	.number_c {
		font-size: 16px;
		font-weight: bold;
		color: #06d6a0;
	}
	.number_r {
		font-size: 16px;
		font-weight: bold;
		color: #118ab2;
	}
	@media (min-width: 768px) {
		.card {
			width: 300px;
		}
	}
`;

export default StyledRegion;
