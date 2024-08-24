import {DefaultActionTypes} from '@customTypes/ActionTypes';
import {PostModel} from '@customTypes/Model';

export const GET_POSTS = 'GET_POSTS';
export const POST_LOADING = 'POST_LOADING';
export const SET_POSTS = 'SET_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export function fetchPosts(): DefaultActionTypes {
  return {
    type: GET_POSTS,
  };
}

export function postLoading(value: boolean): DefaultActionTypes {
  return {
    type: POST_LOADING,
    payload: value,
  };
}

export function removePost(id: number): DefaultActionTypes {
  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function updatePost(post: PostModel): DefaultActionTypes {
  return {
    type: EDIT_POST,
    payload: post,
  };
}

export function setPosts(posts: PostModel[]): DefaultActionTypes {
  return {
    type: SET_POSTS,
    payload: posts,
  };
}
