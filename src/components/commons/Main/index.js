import React from "react";

import { WrapperSection } from "./styles";

function Main({ children, text }) {
	return (
		<WrapperSection>
			<WrapperSection.SectionTitle>{text}</WrapperSection.SectionTitle>
			{children}
		</WrapperSection>
	);
}

export default Main;
