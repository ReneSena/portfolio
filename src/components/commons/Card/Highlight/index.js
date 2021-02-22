import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from './styles';

function CardHighlight({ url, title, alt, description }) {
	return (
		<>
			<CardWrapper>
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Description>
						<CardWrapper.Title>{title}</CardWrapper.Title>
						<CardWrapper.Text>{description}</CardWrapper.Text>
					</CardWrapper.Description>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
	);
}

CardHighlight.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default CardHighlight;
