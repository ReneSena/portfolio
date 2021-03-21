import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Close } from '@styled-icons/ionicons-outline/Close';
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
			<motion.div
				transition={{ delay: 0, duration: 0.5 }}
				variants={{
					open: { opacity: 1, pointerEvents: 'all' },
					closed: { opacity: 0, pointerEvents: 'none' },
				}}
				initial="closed"
				animate={isOpen ? 'open' : 'closed'}>
				{children({
					'data-modal-safe-area': 'true',
					close: (
						<Close
							id="button-close-modal"
							role="button"
							size="30"
							color="#888"
							onClick={() => onClose()}
						/>
					),
				})}
			</motion.div>
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
