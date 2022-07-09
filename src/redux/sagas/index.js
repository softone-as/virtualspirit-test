import { all, takeLatest } from 'redux-saga/effects';
import {
	DELETE_POST_PENDING,
	GET_POST_PENDING,
	PATCH_POST_PENDING,
	POST_POST_PENDING,
} from '../actions/posts';
import {
	handleDeletePost,
	handlePatchPost,
	handlePostPosts,
	handlePostsLoad,
} from './handlers/post';

//watcher saga
function* retrievePostsSaga() {
	yield takeLatest(GET_POST_PENDING, handlePostsLoad);
}

//watcher saga
function* addPostsSaga() {
	yield takeLatest(POST_POST_PENDING, handlePostPosts);
}

//watcher saga
function* deletePostsSaga() {
	yield takeLatest(DELETE_POST_PENDING, handleDeletePost);
}

//watcher saga
function* editPostsSaga() {
	yield takeLatest(PATCH_POST_PENDING, handlePatchPost);
}

// Export all sagas
export default function* rootSaga() {
	yield all([
		retrievePostsSaga(),
		addPostsSaga(),
		deletePostsSaga(),
		editPostsSaga(),
	]);
}
