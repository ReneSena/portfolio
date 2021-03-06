import React from 'react';
import { Heart } from '@styled-icons/boxicons-solid/Heart';

import { Container } from './styles';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<Container>
			<p>Rene Sena {currentYear} @ Feito com Nextjs</p>
			<Heart size="20" color="red" />
		</Container>
	);
}

export default Footer;
