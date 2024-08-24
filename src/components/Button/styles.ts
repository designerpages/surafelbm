import {AppColors} from '@theme/colors';
import {Pressable} from 'react-native';
import {styled} from 'styled-components';

const ButtonWrapper = styled(Pressable)`
  align-items: center;
  border-radius: 12px;
  background-color: ${AppColors.ButtonPrimary};
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  height: 48px;
  margin-top: 16px;
`;
export {ButtonWrapper};
