import {StyleSheet} from 'react-native';
import {AppColors} from './colors';

export const Typography = StyleSheet.create({
  Body2Bold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: AppColors.White,
  },
  Caption: {
    fontWeight: '500',
    fontSize: 16,
    color: AppColors.White,
  },
  Caption2: {
    fontSize: 16,
    color: AppColors.Gray,
  },
  TextWhite: {
    color: AppColors.White,
  },
});
