import styled from 'styled-components';

export const StyledLink = styled.a`
	text-decoration: none;
	transition: all 200ms linear;
	color: ${({ color }) => color};

	&:hover,
	&:focus {
		opacity: 0.8;
	}
`;
