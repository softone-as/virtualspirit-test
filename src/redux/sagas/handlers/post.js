import { all, call, put } from 'redux-saga/effects';
import {
	deletePostError,
	deletePostSuccess,
	getPostError,
	getPostSuccess,
	postPostError,
	postPostSuccess,
} from '../../actions/posts';
import {
	requestDeletePost,
	requestGetPost,
	requestPostPost,
} from '../requests/posts';

export function* handlePostsLoad(action) {
	let length = Array.from({ length: 100 }, (_, i) => i + 1);

	try {
		const response = yield all(
			length.map((id) => call(requestGetPost, id))
		);

		yield put(getPostSuccess(response));
	} catch (error) {
		yield put(getPostError(error));
	}
}

export function* handlePostPosts(action) {
	try {
		const response = yield call(requestPostPost, action.payload);

		yield put(postPostSuccess(response));
	} catch (error) {
		yield put(postPostError(error));
	}
}

export function* handleDeletePost(action) {
	const id = action.payload;
	try {
		yield call(requestDeletePost, id);

		yield put(deletePostSuccess());
	} catch (error) {
		yield put(deletePostError(error));
	}
}
