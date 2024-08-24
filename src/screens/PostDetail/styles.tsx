import {AppColors} from '@theme/colors';
import {SafeAreaView, View} from 'react-native';
import {styled} from 'styled-components';

const MainWrapper = styled(View)`
  background-color: ${AppColors.PrimaryBG};
  flex: 1;
  padding-horizontal: 20px;
`;
const SafeAreaWrapper = styled(SafeAreaView)`
  background-color: ${AppColors.PrimaryBG};
  flex: 1;
`;

export {MainWrapper, SafeAreaWrapper};
