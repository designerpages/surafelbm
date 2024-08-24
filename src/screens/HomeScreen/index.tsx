import PostItem from '@components/PostItem';
import usePosts from '@customHooks/posts.hook';

import React, {useEffect} from 'react';
import {MainWrapper, SafeAreaWrapper} from './styles';
import {FlatList, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@customTypes/Navigation';
import {PostModel} from '@customTypes/Model';
import {POST_DETAIL} from '@navigation/constants';
import {AppColors} from '@theme/colors';
import SearchHeader from '@components/SearchHeader';
const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {getPosts, posts, postLoading, onSearchType, searchText} = usePosts();
  useEffect(() => {
    getPosts();
  }, []);
  const onPostPress = (item: PostModel) => {
    navigation.navigate(POST_DETAIL, {item});
  };
  const onRefresh = () => {
    getPosts();
  };
  return (
    <>
      <SearchHeader onSearchType={onSearchType} searchText={searchText} />
      <SafeAreaWrapper>
        <MainWrapper>
          <FlatList
            data={posts}
            refreshControl={
              <RefreshControl
                refreshing={postLoading}
                onRefresh={onRefresh}
                tintColor={AppColors.White}
              />
            }
            renderItem={({item}) => (
              <PostItem item={item} onPostPress={onPostPress} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </MainWrapper>
      </SafeAreaWrapper>
    </>
  );
};

export default HomeScreen;
