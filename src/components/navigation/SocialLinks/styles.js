import styled from "styled-components";

export const SocialWrapper = styled.nav``;

SocialWrapper.List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
	position: absolute;
	top: 50%;
	left: 10%;
	transform: translateY(-50%);

	&::before,
	&::after {
		content: "";
		width: 2px;
		height: 60px;
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

SocialWrapper.Item = styled.li``;

SocialWrapper.Link = styled.a``;
