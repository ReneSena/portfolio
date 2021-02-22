import React from 'react';
import PropTypes from 'prop-types';
import { WrapperSection } from './styles';

function Main({ children, text }) {
	return (
		<WrapperSection>
			<WrapperSection.SectionTitle>{text}</WrapperSection.SectionTitle>
			{children}
		</WrapperSection>
	);
}

Main.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
	text: PropTypes.string.isRequired,
};

export default Main;
