export const PostsService = {
	postData,
	getData,
	patchData,
	deleteData,
};

async function postData(object) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(object),
	};

	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts',
		requestOptions
	);
	const dataPost = await res.json();

	return dataPost;
}

async function getData(postId) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	const dataPosts = await res.json();

	return dataPosts;
}

async function patchData(id, value) {
	const requestOptions = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(value),
	};

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		requestOptions
	);
	const dataPost = await res.json();
	return dataPost;
}

function deleteData(post_id) {
	const requestOptions = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	return fetch(
		`https://jsonplaceholder.typicode.com/posts/${post_id}`,
		requestOptions
	).then((res) => res);
}
