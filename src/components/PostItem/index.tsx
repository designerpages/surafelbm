import React from 'react';
import {PostItemProps} from '@customTypes/Components';
import {ItemWrapper, PostLetter} from './styles';
import {Text, View} from 'react-native';
import {Typography} from '@theme/typography';
import {HorizontalWrapper} from '../../styles/index';
import {truncate} from '@helpers/util';
import {Spacing} from '@theme/spacing';

const PostItem = ({item, onPostPress}: PostItemProps) => {
  return (
    <ItemWrapper onPress={() => onPostPress(item)}>
      <HorizontalWrapper justify="flex-start">
        <PostLetter>
          <Text style={[Typography.Body2Bold]}>
            {item.title.substring(0, 1).toUpperCase()}
          </Text>
        </PostLetter>
        <View style={{flex: 1}}>
          <Text style={[Typography.Caption, Spacing.Right8]}>
            {truncate(item.title, 30)}
          </Text>
          <Text style={[Typography.Caption2]}>{truncate(item.body, 100)}</Text>
        </View>
      </HorizontalWrapper>
    </ItemWrapper>
  );
};

export default PostItem;
