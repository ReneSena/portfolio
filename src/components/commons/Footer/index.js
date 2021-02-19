import React from "react";

import { Container } from "./styles";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<Container>
			<p>Rene Sena {currentYear} @ Feito com Nextjs </p>
		</Container>
	);
}

export default Footer;
