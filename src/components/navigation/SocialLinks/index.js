import React from "react";

import socials from "./content";
import { SocialWrapper } from "./styles";

function SocialLinks() {
	return (
		<SocialWrapper>
			<SocialWrapper.List>
				{socials.map((social) => (
					<SocialWrapper.Item key={social.url}>
						<SocialWrapper.Link href={social.url}>
							{social.icon}
						</SocialWrapper.Link>
					</SocialWrapper.Item>
				))}
			</SocialWrapper.List>
		</SocialWrapper>
	);
}

export default SocialLinks;
