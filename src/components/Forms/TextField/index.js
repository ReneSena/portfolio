import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from './styles';

function InputText({ label, id, name, tag, ...props }) {
	return (
		<InputWrapper>
			<InputWrapper.Label htmlFor={id}>{label}</InputWrapper.Label>
			<InputWrapper.Input id={id} name={name} {...props} />
		</InputWrapper>
	);
}

InputText.defaultProps = {
	tag: '',
};

InputText.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string,
};

export default InputText;
