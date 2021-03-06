import styled from 'styled-components';

export const CardWrapper = styled.a`
	border-radius: 10px;
	transition: all 200ms linear;
	cursor: pointer;
	box-shadow: 0 2px 50px rgba(0, 0, 0, 0.4);

	&:hover {
		transform: scale(0.98) translateY(-5px);
	}
`;

CardWrapper.Image = styled.img`
	width: 100%;
	margin: auto;
	object-fit: cover;
	border-radius: 10px;
	display: inline-block;
`;

CardWrapper.Footer = styled.div`
	padding: 20px;
	text-align: left;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

CardWrapper.Description = styled.div`
	padding: 10px;

	& h2 {
		margin-bottom: 24px;
	}
`;

CardWrapper.Title = styled.h2`
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	color: #333333;
`;

CardWrapper.Text = styled.p`
	font-size: 14px;
	font-weight: 600;
	font-family: 'Open Sans', sans-serif;
	color: #888;
	margin-top: 12px;
`;
