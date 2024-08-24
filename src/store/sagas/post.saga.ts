import {PostModel} from '@customTypes/Model';
import {showToast} from '@helpers/util';
import PostService from '@services/post.service';
import {
  GET_POSTS,
  POST_LOADING,
  SET_POSTS,
  DELETE_POST,
  EDIT_POST,
} from '@store/actions/post.action';
import {call, put, take} from 'redux-saga/effects';
import * as RootNavigation from '@navigation/RootNavigation';
import {HOME, POST_DETAIL} from '@navigation/constants';

// Workers

export function* workerFetchPost() {
  yield put({type: POST_LOADING, payload: true});
  const response: PostModel[] | null = yield call(PostService.fetchAllPosts);
  if (response) {
    yield put({type: SET_POSTS, payload: response});
  } else {
    showToast('Failed to fetch posts');
  }
  yield put({type: POST_LOADING, payload: false});
}

export function* workerDeletePost(id: number) {
  yield put({type: POST_LOADING, payload: true});
  const response: boolean | null = yield call(PostService.deletePost, id);
  if (response) {
    showToast('Post deleted successfully', 'Success', 'success');
    RootNavigation.navigate(HOME);
  } else {
    showToast('Failed to delete post');
  }
  yield put({type: POST_LOADING, payload: false});
}

export function* workerEditPost(data) {
  yield put({type: POST_LOADING, payload: true});
  const response: boolean | null = yield call(PostService.editPost, data);
  if (response) {
    showToast('Post edited successfully', 'Success', 'success');
    RootNavigation.navigate(POST_DETAIL, {item: data});
  } else {
    showToast('Failed to edit post');
  }
  yield put({type: POST_LOADING, payload: false});
}

// Watchers

export function* watchFetchPost() {
  while (true) {
    yield take(GET_POSTS);
    yield call(workerFetchPost);
  }
}

export function* watchDeletePost() {
  while (true) {
    const {payload} = yield take(DELETE_POST);
    yield call(workerDeletePost, payload);
  }
}

export function* watchEditPost() {
  while (true) {
    const {payload} = yield take(EDIT_POST);
    yield call(workerEditPost, payload);
  }
}
