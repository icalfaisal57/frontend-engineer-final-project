import { useContext, useEffect } from "react";
import Global from "../Global/Global";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../Context/GlobalContext";
import ENDPOINTS from "../../utils/constants/endpoint";
import axios from "axios";
import StyledMain from "./Main.styled";

function Main() {
	const {globals,setGlobals}=useContext(GlobalContext)
	useEffect(() => {
		getGlobals();
	}, []);
	async function getGlobals() {
		const response = await axios(ENDPOINTS.GLOBALS);
		setGlobals(response.data.global);
	}
	return (
		<StyledMain>
			<div className="container">
				<div className="header">Global Situation</div>
				<div className="subhead">Data Covid Berdasarkan Global</div>
				<div className="row">
					{globals.map((global) => {
						return (
							<div className="list" key={uuidv4()}>
								<Global global={global} />
							</div>
						);
					})}
				</div>
			</div>
		</StyledMain>
	);
}

export default Main;
