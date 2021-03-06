import styled from 'styled-components';

export const CardWrapper = styled.a`
	display: block;
	width: 300px;
	border-radius: 5px;
	border: 0.2px solid #e4e4e4;
	padding: 20px;
	border-radius: 5px;
	flex: 1 1 25%;
	transition: all 200ms linear;
	cursor: pointer;

	&:hover {
		transform: scale(0.98) translateY(-5px);
		box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
		border-radius: 0;
	}
`;

CardWrapper.Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 5px;
`;

CardWrapper.Footer = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

CardWrapper.Description = styled.div`
	padding: 10px;

	& h2 {
		margin-bottom: 24px;
	}
`;

CardWrapper.Title = styled.h2`
	font: ${({ theme }) => theme.typographys.subTitle.font};
`;

CardWrapper.Text = styled.p`
	font: ${({ theme }) => theme.typographys.paragraph2.font};
`;
