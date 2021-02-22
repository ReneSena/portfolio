import React from "react";
import Brand from "../../navigation/Brand";
import NavBar from "../../navigation/NavBar";
import { Container } from "./styles";

function Header() {
	return (
		<Container>
			<Brand />
			<NavBar />
		</Container>
	);
}

export default Header;
