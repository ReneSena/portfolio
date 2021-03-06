import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const SocialWrapper = styled.nav``;

SocialWrapper.List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;

	/* height: 100vh; */
	/* gap: 30px; */
	/* position: absolute;
	top: 50%;
	left: 10%;
	transform: translateY(-50%); */

	${breakpointsMedia({
		xs: css`
			/* position: absolute;
			bottom: -20%;
			left: 50%; */
			/* transform: translateX(-50%); */
			/* flex-direction: row; */
		`,
		md: css`
			/* position: absolute;

			left: 10%;
			transform: translateY(-50%);
			flex-direction: row; */
		`,
	})}
`;

SocialWrapper.Item = styled.li`
	&:not(:last-child) {
		margin-right: 30px;
	}
`;

SocialWrapper.Link = styled.a``;
