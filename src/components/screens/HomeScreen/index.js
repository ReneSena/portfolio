import React from 'react';
import Cover from '../../commons/Cover';
import Main from '../../commons/Main';
import Projects from '../../commons/Projects';

export default function HomeScreen() {
	return (
		<>
			<Cover />
			<Main text="My Works">
				<Projects />
			</Main>
		</>
	);
}
