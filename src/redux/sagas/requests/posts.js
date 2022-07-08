import { PostsService } from '../../../services/PostsService';

export function requestGetPost(id) {
	return PostsService.getData(id);
}

export function requestPostPost(data) {
	return PostsService.postData(data);
}

export function requestDeletePost(id) {
	return PostsService.deleteData(id);
}
