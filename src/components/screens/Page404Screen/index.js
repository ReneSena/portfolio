import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animationPage404 from './animations/animation-404.json';
import Link from '../../commons/Link';
import Button from '../../commons/Button';

import { Container } from './styles';

export default function Page404Screen() {
	return (
		<Container>
			<Lottie
				config={{
					animationData: animationPage404,
					loop: true,
					autoplay: true,
				}}
			/>
			<Button as={Link} href="/" variant="primary">
				Back to home
			</Button>
		</Container>
	);
}
