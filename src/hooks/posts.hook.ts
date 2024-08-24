import {PostModel} from '@customTypes/Model';
import {
  fetchPosts,
  removePost,
  updatePost,
  setPosts,
} from '@store/actions/post.action';
import {
  getPostLoadingSelector,
  getPostsSelector,
} from '@store/reducers/post.reducer';
import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);
  const postLoading = useSelector(getPostLoadingSelector);
  const [searchText, setSearchText] = React.useState('');
  const getPosts = () => {
    dispatch(fetchPosts());
  };
  const deletePost = (id: number) => {
    Alert.alert(
      'Delete Post',
      'Are you sure you want to delete this post?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(removePost(id));
          },
        },
      ],
      {cancelable: false},
    );
  };

  const editPost = (data: PostModel) => {
    dispatch(updatePost(data));
  };

  const debouncedSearch = useDebouncedCallback(searchText => {
    if (searchText === '') {
      getPosts();
    } else {
      //perform search on posts and assign to posts using dispatch
      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      dispatch(setPosts(filteredPosts));
    }
  }, 500);

  const onSearchType = (text: string) => {
    setSearchText(text);
    debouncedSearch(text);
  };
  return {
    getPosts,
    posts,
    postLoading,
    deletePost,
    editPost,
    onSearchType,
    searchText,
  };
};

export default usePosts;
