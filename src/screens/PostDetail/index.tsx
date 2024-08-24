import PostItem from '@components/PostItem';
import usePosts from '@customHooks/posts.hook';

import React, {useEffect} from 'react';
import {MainWrapper, SafeAreaWrapper} from './styles';
import {Pressable, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Icons} from '@assets/icons';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@customTypes/Navigation';
import {HorizontalWrapper} from '../../styles/index';
import {RouteParams} from '@customTypes/Model';
import {Typography} from '@theme/typography';
import {Spacing} from '@theme/spacing';
import Button from '@components/Button';
import {EDIT_POST} from '@navigation/constants';
const PostDetailScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RouteParams, 'post_detail'>>();
  const {item} = route.params;

  const {deletePost} = usePosts();
  const onBackPress = () => {
    navigation.goBack();
  };
  const onEditPress = () => {
    navigation.navigate(EDIT_POST, {item});
  };
  return (
    <SafeAreaWrapper>
      <MainWrapper>
        <HorizontalWrapper justify="space-between">
          <Pressable onPress={onBackPress}>
            <SvgXml xml={Icons.Back} />
          </Pressable>
          <Pressable onPress={() => deletePost(item.id)}>
            <SvgXml xml={Icons.Delete} />
          </Pressable>
        </HorizontalWrapper>
        <View style={[Spacing.Top30]}>
          <Text style={[Typography.Caption, Spacing.Right8]}>{item.title}</Text>
          <Text style={[Typography.Caption2, Spacing.Top30]}>{item.body}</Text>
        </View>
        <Button title="Edit Post" onPress={onEditPress} />
      </MainWrapper>
    </SafeAreaWrapper>
  );
};

export default PostDetailScreen;
