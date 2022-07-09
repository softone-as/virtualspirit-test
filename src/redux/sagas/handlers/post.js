import { all, call, put } from 'redux-saga/effects';
import {
	deletePostError,
	deletePostSuccess,
	getPostError,
	getPostSuccess,
	patchPostError,
	patchPostSuccess,
	postPostError,
	postPostSuccess,
} from '../../actions/posts';
import {
	requestDeletePost,
	requestGetPost,
	requestPatchPost,
	requestPostPost,
} from '../requests/posts';

export function* handlePostsLoad(action) {
	//Add array for assign an id from 1 - 100
	let length = Array.from({ length: 100 }, (_, i) => i + 1);

	try {
		//call api from id 1 - 100, and load it when all request are done
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

export function* handlePatchPost({ postId, payload }) {
	try {
		const response = yield call(requestPatchPost, postId, payload);

		yield put(patchPostSuccess(response));
	} catch (error) {
		yield put(patchPostError(error));
	}
}
