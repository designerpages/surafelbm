import {all, fork} from 'redux-saga/effects';

import {
  watchDeletePost,
  watchEditPost,
  watchFetchPost,
} from '@store/sagas/post.saga';

export default function* root() {
  yield all([fork(watchFetchPost), fork(watchDeletePost), fork(watchEditPost)]);
}
