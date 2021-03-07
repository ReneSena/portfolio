import React from 'react';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import Button from '../Button';
import Modal from '../Modal';
import FormContact from '../../patterns/FormContact';

import { Container } from './styles';

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

			<Button type="button" onClick={() => setIsOpen(!isOpen)}>
				Entrar em contato
			</Button>

			<Container>
				<p>Rene Sena {currentYear} @ Feito com Nextjs</p>
				<Heart size="20" color="red" />
			</Container>
		</>
	);
}

export default Footer;
