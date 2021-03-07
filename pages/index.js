import React from 'react';
import Cover from '../src/components/commons/Cover';
import Header from '../src/components/commons/Header';
import Footer from '../src/components/commons/Footer';
import Main from '../src/components/commons/Main';
import Modal from '../src/components/commons/Modal';
import Projects from '../src/components/commons/Projects';
import FormContact from '../src/components/patterns/FormContact';

export default function Home() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			{isOpen && (
				<Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
					{(propsModal) => <FormContact propsModal={propsModal} />}
				</Modal>
			)}

			<button type="button" onClick={() => setIsOpen(!isOpen)}>
				Abrir modal
			</button>
			<Header />
			<Cover />
			<Main text="My Works">
				<Projects />
			</Main>
			<Footer />
		</>
	);
}
