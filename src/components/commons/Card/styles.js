import styled from "styled-components";

export const CardWrapper = styled.div`
	width: 300px;
	max-height: 350px;
	border-radius: 5px;
	border: 1px solid #c1c1c1;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

CardWrapper.Image = styled.img`
	max-width: 100%;
	object-fit: cover;
`;

CardWrapper.Footer = styled.div`
	padding: 10px;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

CardWrapper.Title = styled.h2``;

CardWrapper.Text = styled.p``;
