import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBase } from './styles';

function Button({ children, type }) {
	return (
		<ButtonBase type={type} primary disabled>
			{children}
		</ButtonBase>
	);
}

Button.defaultProps = {
	type: 'submit',
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
};

export default Button;
