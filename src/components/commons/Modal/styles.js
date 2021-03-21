import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
	background: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;

	#button-close-modal {
		position: absolute;
		top: 20px;
		right: 20px;
		transition: all 0.3s linear;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}
	}

	${({ isOpen }) => {
		if (isOpen) {
			return css`
				opacity: 1;
				pointer-events: all;
			`;
		}

		return css`
			opacity: 0;
			pointer-events: none;
		`;
	}};
`;
