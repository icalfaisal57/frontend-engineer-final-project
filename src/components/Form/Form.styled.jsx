import styled from "styled-components";

const StyledForm = styled.div`
	/* small screen */
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 1rem;
	}

	.image {
		max-width: 75%;
		height: auto;
		align-items: center;
		border-radius: 25px;
		margin: auto;
	}

	.form {
		background-color: #f4f4f4;
		padding: 20px;
		border-radius: 10px;
		max-width: 300px;
		margin: auto;
		width: 100%;
	}

	.form h2 {
		color: #06d6a0;
		text-align: center;
	}

	.label {
		display: block;
		margin-bottom: 5px;
	}

	.select {
		width: 100%;
		padding: 10px;
		margin-bottom: 20px;
		border-radius: 5px;
		border: 2px solid #06d6a0;
	}

	.select_option {
		color: #06d6a0;
		padding: 8px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.button {
		padding: 0.8rem 2rem;
		border: none;
		border-radius: 10px;
		background-color: #06d6a0;
		color: #fff;
	}

	.buttonform {
		text-align: center;
	}
	/* medium screen */
	@media (min-width: 768px) {
		/*  */
	}

	/* large screen */
	@media (min-width: 992px) {
		.container {
			flex-direction: column;
		}

		.left,
		.right {
			width: 50%;
		}
		.formcontainer {
			display: flex;
			flex-direction: row;
			margin: auto;
			margin-top: 20px;
		}
	}
`;

export default StyledForm;
