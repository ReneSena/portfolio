import React from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper } from './styles';

function Modal({ children, isOpen, onClose }) {
	return (
		<ModalWrapper
			onClick={(event) => {
				const isSafeArea = event.target.closest(
					'[data-modal-safe-area="true"]'
				);

				if (!isSafeArea) {
					onClose();
				}
			}}
			isOpen={isOpen}>
			{children({
				'data-modal-safe-area': 'true',
			})}
		</ModalWrapper>
	);
}

Modal.propTypes = {
	children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
		.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default Modal;
