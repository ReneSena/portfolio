import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';

import { CardWrapper } from './styles';

function Card({ url, title, author, alt, href }) {
	return (
		<>
			<CardWrapper href={href}>
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<div>
						<CardWrapper.Title>{title}</CardWrapper.Title>
						<CardWrapper.Text>{author}</CardWrapper.Text>
					</div>
					<ArrowRight size="24" color="#888" />
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
	author: PropTypes.string.isRequired,
};

export default Card;
