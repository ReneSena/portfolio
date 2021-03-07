import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBase } from './styles';

function Button({ children, type, variant, ...props }) {
	return (
		<ButtonBase type={type} variant={variant} {...props}>
			{children}
		</ButtonBase>
	);
}

Button.defaultProps = {
	type: 'submit',
	variant: 'primary',
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	variant: PropTypes.string,
};

export default Button;
