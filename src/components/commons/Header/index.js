import React from "react";
import NavBar from "../../navigation/NavBar";
import { Container, Title } from "./styles";

function Header() {
	return (
		<Container>
			<Title> {`<Rene.Sena />`} </Title>
			<NavBar />
		</Container>
	);
}

export default Header;
