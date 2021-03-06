import React from 'react';
import Brand from '../../navigation/Brand';
import NavBar from '../../navigation/NavBar';
import { Container } from './styles';

function Header() {
	const [isMenuTop, setMenuTop] = React.useState(false);

	React.useEffect(() => {
		const scroll = window.addEventListener('scroll', () => {
			window.scrollY > window.innerHeight && setMenuTop(true);
			window.scrollY < window.innerHeight && setMenuTop(false);
		});

		return () => {
			window.removeEventListener('scroll', scroll);
		};
	}, [isMenuTop]);

	return (
		<Container isInitial={isMenuTop}>
			<Brand />
			<NavBar />
		</Container>
	);
}

export default Header;
