import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from './styles';

function Card({ url, title, alt, href }) {
	return (
		<>
			<CardWrapper href={href}>
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Title>{title}</CardWrapper.Title>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export default Card;
