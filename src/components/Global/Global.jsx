import StyledGlobal from "./Global.styled";

function Global(props) {
	const { global } = props;
	return (
		<StyledGlobal>
			<div className="container">
				<div className="head">{global.status}</div>
				<div className="sub">{global.total}</div>
			</div>
		</StyledGlobal>
	);
}
export default Global;
