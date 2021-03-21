import React from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import { SendPlane } from '@styled-icons/remix-fill/SendPlane';
import InputText from '../../Forms/TextField';
import Button from '../../commons/Button';
import Loading from './animations/loading-message.json';
import SuccessFeedback from './animations/success-message.json';
import ErrorFeedback from './animations/error-message.json';
import { FormWrapper } from './styles';
import { createContactService } from '../../../services/contact';

function FormContact({ propsModal }) {
	const formStateVariants = {
		SUCCESS: 'SUCCESS',
		ERROR: 'ERROR',
		LOADING: 'LOADING',
		INITIAL: 'INITIAL',
	};

	const initialValues = {
		name: '',
		email: '',
		message: '',
	};

	const [contactData, setContactData] = React.useState(initialValues);
	const [isFormSubmited, setIsFormSubmited] = React.useState(false);
	const [formState, setFormState] = React.useState(formStateVariants.INITIAL);

	function handleChange(event) {
		const fieldName = event.target.getAttribute('name');
		setContactData({
			...contactData,
			[fieldName]: event.target.value,
		});
	}

	function FeedbackAnimation({
		nameAnimation,
		loopAnimation,
		autoPlayAnimation,
		messageFeedback,
	}) {
		return (
			<>
				<Lottie
					config={{
						animationData: nameAnimation,
						loop: loopAnimation,
						autoplay: autoPlayAnimation,
					}}
				/>
				<FormWrapper.Feedback>{messageFeedback}</FormWrapper.Feedback>
			</>
		);
	}

	function handleSubmit(event) {
		event.preventDefault();

		setIsFormSubmited(true);
		setFormState(formStateVariants.LOADING);

		createContactService(contactData)
			.then((response) => {
				if (response.ok || response.status === 201)
					setFormState(formStateVariants.SUCCESS);
			})
			.catch((error) => {
				if (error.status === 400 || !error.response)
					setFormState(formStateVariants.ERROR);
			})
			.finally(() => {
				setTimeout(() => {
					setFormState(formStateVariants.INITIAL);
					setIsFormSubmited(false);
					setContactData(initialValues);
				}, 5000);
			});
	}

	return (
		<FormWrapper {...propsModal}>
			{propsModal.close}
			<FormWrapper.Ilustration>
				<img
					src="/contact.png"
					alt="Ilustração com pessoa mexendo em dispositivos móveis"
				/>
			</FormWrapper.Ilustration>
			<FormWrapper.Form onSubmit={handleSubmit}>
				{!isFormSubmited && (
					<>
						<InputText
							label="Name"
							isRequired
							id="name"
							name="name"
							placeholder="Your name"
							value={contactData.name}
							onChange={handleChange}
						/>

						<InputText
							label="E-mail"
							isRequired
							id="email"
							type="email"
							name="email"
							placeholder="Your e-mail"
							value={contactData.email}
							onChange={handleChange}
						/>

						<InputText
							as="textarea"
							isRequired
							label="Message"
							id="message"
							name="message"
							placeholder="Your message"
							value={contactData.message}
							onChange={handleChange}
						/>

						<Button
							disabled={
								!contactData.email ||
								!contactData.message ||
								!contactData.name
							}
							fullWidth>
							Send Message <SendPlane size="24" />
						</Button>
					</>
				)}

				{isFormSubmited && formState === formStateVariants.LOADING && (
					<FeedbackAnimation
						autoPlayAnimation
						loopAnimation
						nameAnimation={Loading}
						messageFeedback="Send..."
					/>
				)}

				{isFormSubmited && formState === formStateVariants.SUCCESS && (
					<FeedbackAnimation
						autoPlayAnimation
						loopAnimation={false}
						nameAnimation={SuccessFeedback}
						messageFeedback="Thanks for your message, it was sent with success and will soon be answered. See you later! :)"
					/>
				)}

				{isFormSubmited && formState === formStateVariants.ERROR && (
					<FeedbackAnimation
						autoPlayAnimation
						loopAnimation
						nameAnimation={ErrorFeedback}
						messageFeedback="Your message was not sent, try again. Back to the beginning."
					/>
				)}
			</FormWrapper.Form>
		</FormWrapper>
	);
}

FormContact.defaultProps = {
	messageFeedback: '',
	nameAnimation: '',
	loopAnimation: false,
	autoPlayAnimation: false,
};

FormContact.propTypes = {
	propsModal: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.elementType,
	]).isRequired,
	nameAnimation: PropTypes.string,
	loopAnimation: PropTypes.bool,
	autoPlayAnimation: PropTypes.bool,
	messageFeedback: PropTypes.string,
};

export default FormContact;
