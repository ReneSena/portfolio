import styled from "styled-components";

export const WrapperSection = styled.main`
	width: 100%;
	max-width: 1000px;
	margin: auto;
	padding: 40px;
`;

WrapperSection.SectionTitle = styled.h2`
	text-align: center;
	margin-top: 24px;
	margin-bottom: 60px;
	font: ${({ theme }) => theme.typographys.titleXS.font};
	color: ${({ theme }) => theme.colors.secondary};
`;
