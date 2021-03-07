import React from 'react';
import Cover from '../src/components/commons/Cover';
import Header from '../src/components/commons/Header';
import Footer from '../src/components/commons/Footer';
import Main from '../src/components/commons/Main';
import Projects from '../src/components/commons/Projects';

export default function Home() {
	return (
		<>
			<Header />
			<Cover />
			<Main text="My Works">
				<Projects />
			</Main>
			<Footer />
		</>
	);
}
