import React from "react";
import Cover from "../src/components/commons/Cover";
import Card from "../src/components/commons/Card";
import Header from "../src/components/commons/Header";
import Footer from "../src/components/commons/Footer";
import Main from "../src/components/commons/Main";

export default function Home() {
	return (
		<>
			<Header />
			<Cover />
			<Main>
				<ul
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						flexWrap: "wrap",
						gap: "24px",
					}}
				>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</ul>
			</Main>
			<Footer />
		</>
	);
}
