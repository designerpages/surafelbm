import {SET_POSTS, POST_LOADING} from '@store/actions/post.action';
import {Post} from '@customTypes/State';
import {DefaultActionTypes} from '@customTypes/ActionTypes';
import {RootState} from '.';

const defaultState: Post = {
  posts: [],
  postLoading: false,
};

export default function postReducer(
  state = defaultState,
  action: DefaultActionTypes,
) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case POST_LOADING:
      return {
        ...state,
        postLoading: action.payload,
      };
    default:
      return state;
  }
}

export const getPostsSelector = (state: RootState) => state.post.posts;

export const getPostLoadingSelector = (state: RootState) =>
  state.post.postLoading;
