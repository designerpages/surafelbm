import {AppColors} from '@theme/colors';
import {Pressable, View} from 'react-native';
import {styled} from 'styled-components';

const ItemWrapper = styled(Pressable)`
  background-color: ${AppColors.SecondaryBG};
  padding: 10px 10px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
const PostLetter = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${AppColors.TertiaryBG};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export {ItemWrapper, PostLetter};
