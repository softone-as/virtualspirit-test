export const GET_POST = 'GET_POST';
export const SET_POST = 'SET_POST';

export const GET_POST_PENDING = 'GET_POST_PENDING';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';
export const POST_POST_PENDING = 'POST_POST_PENDING';
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';
export const POST_POST_ERROR = 'POST_POST_ERROR';
export const PATCH_POST_PENDING = 'PATCH_POST_PENDING';
export const PATCH_POST_SUCCESS = 'PATCH_POST_SUCCESS';
export const PATCH_POST_ERROR = 'PATCH_POST_ERROR';
export const DELETE_POST_PENDING = 'DELETE_POST_PENDING';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

export const getPostStart = () => ({
	type: GET_POST_PENDING,
});

export const getPostSuccess = (post) => ({
	type: GET_POST_SUCCESS,
	payload: post,
});

export const getPostError = (error) => ({
	type: GET_POST_SUCCESS,
	error: error,
});

export const postPostStart = (data) => ({
	type: POST_POST_PENDING,
	payload: data,
});

export const postPostSuccess = (data) => ({
	type: POST_POST_SUCCESS,
	payload: data,
});

export const postPostError = (error) => ({
	type: POST_POST_SUCCESS,
	error: error,
});

export const deletePostStart = (id) => ({
	type: DELETE_POST_PENDING,
	payload: id,
});

export const deletePostSuccess = () => ({
	type: DELETE_POST_SUCCESS,
});

export const deletePostError = (error) => ({
	type: DELETE_POST_ERROR,
	error: error,
});

export const patchPostStart = (id, data) => ({
	type: PATCH_POST_PENDING,
	payload: data,
	postId: id,
});

export const patchPostSuccess = (data) => ({
	type: PATCH_POST_SUCCESS,
	payload: data,
});

export const patchPostError = (error) => ({
	type: PATCH_POST_ERROR,
	error: error,
});
