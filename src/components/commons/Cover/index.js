import React from 'react';
import SocialLinks from '../../navigation/SocialLinks';
import AnimationGalaxy from './Animation';

import { CoverWrapper } from './styles';

function Cover() {
	return (
		<>
			<CoverWrapper>
				<CoverWrapper.Title>
					Hello There, Welcome to my portflio!
				</CoverWrapper.Title>
				<CoverWrapper.Avatar src="/avatar.png" />
				<AnimationGalaxy />
				<CoverWrapper.Footer>
					<p>Follow me</p>
					<SocialLinks />
				</CoverWrapper.Footer>
			</CoverWrapper>
		</>
	);
}

export default Cover;
