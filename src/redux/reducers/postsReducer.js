import {
	GET_POST_PENDING,
	GET_POST_SUCCESS,
	GET_POST_ERROR,
	POST_POST_PENDING,
	POST_POST_SUCCESS,
	POST_POST_ERROR,
	DELETE_POST_PENDING,
	DELETE_POST_SUCCESS,
	DELETE_POST_ERROR,
	PATCH_POST_PENDING,
	PATCH_POST_SUCCESS,
	PATCH_POST_ERROR,
} from '../actions/posts';

const initialState = {
	pending: false,
	error: null,
	data_list: [],
	data_post: null,
	data_patch: null,
	data_delete: null,
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POST_PENDING:
			return {
				...state,
				pending: true,
			};
		case GET_POST_SUCCESS:
			return {
				...state,
				pending: false,
				data_list: action.payload,
			};
		case GET_POST_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case POST_POST_PENDING:
			return {
				...state,
				pending: true,
			};
		case POST_POST_SUCCESS:
			return {
				...state,
				pending: false,
				data_post: action.payload,
			};
		case POST_POST_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case PATCH_POST_PENDING:
			return {
				...state,
				pending: true,
			};
		case PATCH_POST_SUCCESS:
			return {
				...state,
				pending: false,
				data_patch: action.payload,
			};
		case PATCH_POST_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case DELETE_POST_PENDING:
			return {
				...state,
				pending: true,
			};
		case DELETE_POST_SUCCESS:
			return {
				...state,
				pending: false,
				data_delete: action.payload,
			};
		case DELETE_POST_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default postsReducer;
