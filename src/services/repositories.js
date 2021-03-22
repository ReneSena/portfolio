export function getRepositoriesServices(userName) {
	return fetch(`https://api.github.com/users/${userName}/repos`).then(
		(response) => {
			if (response.ok) {
				return response.json();
			}

			return response;
		}
	);
}
