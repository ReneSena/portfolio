import styled, { css } from 'styled-components';

const primary = css`
	background-color: #6535cc;
	color: #fff;
`;

export const ButtonBase = styled.button`
	height: 50px;
	font-family: 'Open Sans', sans-serif;
	padding: 0 20px;
	font-weight: 600;
	line-height: 50px;
	outline: none;
	border: 0;
	border-radius: 5px;
	cursor: pointer;
	white-space: nowrap;
	transition: box-shadow 200ms linear;

	&[disabled] {
		background-color: #e4e4e4;
		color: #888;
		cursor: not-allowed;
	}

	${(props) => props.variant === 'primary' && primary}
	${(props) =>
		props.fullWidth &&
		css`
			width: 100%;
		`}

	&:hover::not(:disabled) {
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	}
`;
