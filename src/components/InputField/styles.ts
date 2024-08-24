import {AppColors} from '@theme/colors';
import {Pressable, TextInput, View} from 'react-native';
import {styled} from 'styled-components';
const TextInputWrapper = styled(View)`
  margin-bottom: 12px;
`;
const TextInputField = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: ${AppColors.BorderColor};
  border-radius: 15px;
  padding-left: 16px;
  color: ${AppColors.White};
  font-family: 'Manrope-Regular';
  font-size: 15px;
`;
export {TextInputWrapper, TextInputField};
