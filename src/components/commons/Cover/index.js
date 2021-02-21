import React from "react";
import SocialLinks from "../../navigation/SocialLinks";
import AnimationGalaxy from "./Animation";

import { Avatar, Container, Title, Subtitle, Picture } from "./styles";

function Cover() {
	return (
		<Container>
			<SocialLinks />
			<AnimationGalaxy />
			<Picture>
				<Avatar />
				<Title>Rene Sena</Title>
				<Subtitle>Front-end Developer</Subtitle>
			</Picture>
		</Container>
	);
}

export default Cover;
