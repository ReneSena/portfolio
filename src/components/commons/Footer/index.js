import React from 'react';
import PropTypes from 'prop-types';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import { SendPlane } from '@styled-icons/remix-fill';
import Button from '../Button';

import { Container, ContactWrapper } from './styles';

function Footer({ handleFormContact }) {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<ContactWrapper>
				<img
					src="/background_contact.svg"
					alt="Ilustração de um homem sentado no computador"
				/>
				<Button type="button" onClick={handleFormContact}>
					Send me a message <SendPlane size="24" />
				</Button>
			</ContactWrapper>
			<Container>
				<p>Rene Sena {currentYear} @ Feito com Nextjs</p>
				<Heart size="20" color="red" />
			</Container>
		</>
	);
}

Footer.propTypes = {
	handleFormContact: PropTypes.func.isRequired,
};

export default Footer;
