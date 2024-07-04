import { useContext, useEffect } from "react";
import Global from "../Global/Global";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../Context/GlobalContext";
import ENDPOINTS from "../../utils/constants/endpoint";
import axios from "axios";
import StyledMain from "./Main.styled";

function Main(props) {
	const { detail, title } = props;
	const { globals, setGlobals } = useContext(GlobalContext);

	useEffect(() => {
		getGlobals();
	}, [detail]);

	async function getGlobals() {
		const url = ENDPOINTS.DETAIL(detail);
		try {
			const response = await axios.get(url);
			setGlobals(response.data[detail]);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	return (
		<StyledMain>
			<div className="container">
				<div className="header">{title} Situation</div>
				<div className="subhead">Data Covid Berdasarkan {title}</div>
				<div className="row">
					{globals.map((global) => (
						<div className="list" key={uuidv4()}>
							<Global global={global} />
						</div>
					))}
				</div>
			</div>
		</StyledMain>
	);
}

export default Main;
