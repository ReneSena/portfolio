import { ThemeProvider } from "styled-components";
import Head from "next/head";
import theme from "../src/theme";
import Reset from "../src/components/foundation/Reset";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Rene Sena | Portfolio</title>

				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Lato:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Reset />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
