import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const SocialWrapper = styled.nav``;

SocialWrapper.List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	position: absolute;
	top: 50%;
	left: 10%;
	transform: translateY(-50%);

	${breakpointsMedia({
		xs: css`
			position: absolute;
			bottom: -20%;
			left: 50%;
			transform: translateX(-50%);
			flex-direction: row;
		`,
	})}/* &::before,
	&::after {
		content: '';
		width: 2px;
		height: 80px;
		background-color: ${({ theme }) => theme.colors.grey100};
	} */
`;

SocialWrapper.Item = styled.li``;

SocialWrapper.Link = styled.a``;
