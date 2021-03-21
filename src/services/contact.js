export function createContactService(data) {
	return fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(data),
	}).then((response) => {
		if (!response.ok) {
			throw Error(response.statusText);
		}

		return response;
	});
}
