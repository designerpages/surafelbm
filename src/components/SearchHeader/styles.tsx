import {AppColors} from '@theme/colors';
import {Pressable, View} from 'react-native';
import {styled} from 'styled-components';

const SearchWrapper = styled(Pressable)`
  background-color: ${AppColors.SecondaryBG};
  height: 120px;
  padding-top: 60px;
  padding-horizontal: 40px;
`;

export {SearchWrapper};
