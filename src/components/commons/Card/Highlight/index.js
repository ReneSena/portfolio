import React from "react";

import { CardWrapper } from "./styles";

function CardHighlight({ url, title, alt, description, size }) {
	return (
		<>
			<CardWrapper size={size}>
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Description>
						<CardWrapper.Title>{title}</CardWrapper.Title>
						<CardWrapper.Text>{description}</CardWrapper.Text>
					</CardWrapper.Description>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
	);
}

export default CardHighlight;
