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
import {PostModel, RouteParams} from '@customTypes/Model';
import {Typography} from '@theme/typography';
import {Spacing} from '@theme/spacing';
import Button from '@components/Button';
import InputField from '@components/InputField';
const EditPostScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RouteParams, 'post_detail'>>();
  const {item} = route.params;
  const [title, setTitle] = React.useState(item.title);
  const [body, setBody] = React.useState(item.body);
  const {editPost} = usePosts();
  const onBackPress = () => {
    navigation.goBack();
  };
  const modifyPost = () => {
    const postData: PostModel = {
      ...item,
      title,
      body,
    };
    editPost(postData);
  };
  return (
    <SafeAreaWrapper>
      <MainWrapper>
        <HorizontalWrapper justify="flex-start">
          <Pressable onPress={onBackPress}>
            <SvgXml xml={Icons.Back} />
          </Pressable>
        </HorizontalWrapper>
        <View style={[Spacing.Top30]}>
          <Text style={[Typography.TextWhite, Spacing.Bottom10]}>
            Post Title
          </Text>
          <InputField
            value={title}
            placeholder="Post Title"
            onChange={value => {
              setTitle(value);
            }}
            multiline
          />
          <Text style={[Typography.TextWhite, Spacing.Bottom10]}>
            Post Body
          </Text>
          <InputField
            value={body}
            placeholder="Post Body"
            onChange={value => {
              setBody(value);
            }}
            multiline
          />
        </View>
        <Button title="Update" onPress={modifyPost} />
      </MainWrapper>
    </SafeAreaWrapper>
  );
};

export default EditPostScreen;
