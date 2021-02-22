import React from 'react';

import { CardWrapper } from './styles';

function Card({ url, title, alt, size }) {
	return (
		<>
			<CardWrapper size={size}>
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Title>{title}</CardWrapper.Title>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
	);
}

export default Card;
