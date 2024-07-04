import StyledContainer from "./Container.styled";

function Container(props) {
	return(
	<StyledContainer>
		<div className="container">{props.children}</div>;
	</StyledContainer>
	);
}

export default Container;
