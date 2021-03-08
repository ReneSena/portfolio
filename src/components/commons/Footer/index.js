import React from 'react';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import { SendPlane } from '@styled-icons/remix-fill';
import Button from '../Button';
import Modal from '../Modal';
import FormContact from '../../patterns/FormContact';

import { Container, ContactWrapper } from './styles';

function Footer() {
	const [isOpen, setIsOpen] = React.useState(false);
	const currentYear = new Date().getFullYear();

	return (
		<>
			{isOpen && (
				<Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
					{(propsModal) => <FormContact propsModal={propsModal} />}
				</Modal>
			)}
			<ContactWrapper>
				<img
					src="/background_contact.svg"
					alt="Ilustração de um homem sentado no computador"
				/>
				<Button type="button" onClick={() => setIsOpen(!isOpen)}>
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

export default Footer;
