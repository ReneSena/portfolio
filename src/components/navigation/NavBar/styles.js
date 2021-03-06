import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const NavBarWrapper = styled.nav`
	${breakpointsMedia({
		xs: css`
			width: 100%;
		`,
		md: css`
			width: initial;
		`,
	})};
`;

NavBarWrapper.Menu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
	z-index: 100;
	margin-top: 20px;
	margin-bottom: 30px;

	${breakpointsMedia({
		md: css`
			margin-right: 60px;
			margin-bottom: 0;
			margin-top: 0;
		`,
	})};
`;

NavBarWrapper.Item = styled.li`
	position: relative;
`;

NavBarWrapper.Link = styled.a`
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-size: 400;
	padding: 5px 10px;
	color: ${({ theme }) => theme.colors.black};
	display: inline-block;
	transition: all 200ms ease-in-out;

	${breakpointsMedia({
		xs: css`
			margin: 0;
		`,
		md: css`
			margin-right: 60px;
		`,
	})}

	&.active {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: 700;
	}

	&:hover {
		border-radius: 0;
		transform: scale(0.98) translateY(2px);
	}
`;
