import styled from 'styled-components';

export const SocialWrapper = styled.nav``;

SocialWrapper.List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
`;

SocialWrapper.Item = styled.li`
	&:not(:last-child) {
		margin-right: 30px;
	}
`;

SocialWrapper.Link = styled.a``;
