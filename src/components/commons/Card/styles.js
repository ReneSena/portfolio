import styled from 'styled-components';

export const CardWrapper = styled.a`
	overflow: hidden;
	cursor: pointer;

	&:hover img,
	&:focus img {
		transform: scale(1.05);
		opacity: 0.8;
	}
`;

CardWrapper.Image = styled.img`
	width: 100%;
	max-width: 100%;
	margin: auto;
	object-fit: cover;
	display: inline-block;
	transition: all 200ms linear;
`;

CardWrapper.Footer = styled.div`
	padding-top: 20px;
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
