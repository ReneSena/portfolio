import React from "react";

import { CardWrapper } from "./styles";

function Card() {
	return (
		<CardWrapper>
			<CardWrapper.Image
				src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_960_720.jpg"
				alt="Ilustração de um computador"
			/>
			<CardWrapper.Footer>
				<CardWrapper.Title>Meu Projeto</CardWrapper.Title>
			</CardWrapper.Footer>
		</CardWrapper>
	);
}

export default Card;
