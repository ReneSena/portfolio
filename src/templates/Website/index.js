import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/commons/Header';
import Footer from '../../components/commons/Footer';
import Modal from '../../components/commons/Modal';
import FormContact from '../../components/patterns/FormContact';
import { SEO } from '../../components/commons/SEO';

export const WebsitePageContext = React.createContext({
	toggleModalContact: () => {},
});

function WebsitePage({ children, header, footer, seoProps }) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<WebsitePageContext.Provider
			value={{
				toggleModalContact: () => {
					setIsOpen(!isOpen);
				},
			}}>
			<SEO {...seoProps} />
			<Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
				{(propsModal) => <FormContact propsModal={propsModal} />}
			</Modal>

			{header.visible && <Header />}
			<main styled={{ display: 'flex', flex: '1', height: '100vh' }}>
				{children}
			</main>
			{footer.visible && (
				<Footer handleFormContact={() => setIsOpen(true)} />
			)}
		</WebsitePageContext.Provider>
	);
}

WebsitePage.defaultProps = {
	seoProps: {},
	header: {
		visible: true,
	},
	footer: {
		visible: true,
	},
};

WebsitePage.propTypes = {
	children: PropTypes.node.isRequired,
	seoProps: PropTypes.shape({
		headTitle: PropTypes.string,
	}),
	header: PropTypes.shape({
		visible: PropTypes.bool,
	}),
	footer: PropTypes.shape({
		visible: PropTypes.bool,
	}),
};

export default WebsitePage;
