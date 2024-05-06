function Province(props) {
	const { province } = props;
	return (
		<tr>
			<td>{province.kota}</td>
			<td>{province.kasus}</td>
			<td>{province.sembuh}</td>
			<td>{province.meninggal}</td>
			<td>{province.dirawat}</td>
		</tr>
	);
}
export default Province;
