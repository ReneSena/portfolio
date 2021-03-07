import React from 'react';
import PropTypes from 'prop-types';
import { SendPlane } from '@styled-icons/remix-fill/SendPlane';
import InputText from '../../Forms/TextField';
import Button from '../../commons/Button';

import { FormWrapper } from './styles';

function FormContact({ propsModal }) {
	return (
		<FormWrapper {...propsModal}>
			<FormWrapper.Ilustration>
				<img
					src="/contact.png"
					alt="Ilustração com pessoa mexendo em dispositivos móveis"
				/>
			</FormWrapper.Ilustration>

			<FormWrapper.Form>
				<InputText
					label="Name"
					id="name"
					name="name"
					placeholder="Your name"
				/>

				<InputText
					label="E-mail"
					id="email"
					name="email"
					placeholder="Your e-mail"
				/>

				<InputText
					as="textarea"
					label="Message"
					id="message"
					name="message"
					placeholder="Your message"
				/>

				<Button>
					Send Message <SendPlane size="24" />
				</Button>
			</FormWrapper.Form>
		</FormWrapper>
	);
}

FormContact.propTypes = {
	propsModal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FormContact;
