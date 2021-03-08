import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from './styles';

function InputText({ label, id, name, tag, isRequired, ...props }) {
	return (
		<InputWrapper>
			<InputWrapper.Label htmlFor={id}>
				{label}{' '}
				{isRequired && <strong className="isRequired">*</strong>}
			</InputWrapper.Label>
			<InputWrapper.Input id={id} name={name} {...props} />
		</InputWrapper>
	);
}

InputText.defaultProps = {
	tag: '',
	isRequired: false,
};

InputText.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string,
	isRequired: PropTypes.bool,
};

export default InputText;
