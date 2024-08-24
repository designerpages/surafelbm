import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {ButtonWrapper} from './styles';
import {Typography} from '@theme/typography';
import {ButtonProps} from '@customTypes/Components';

const Button = ({title, onPress, loading}: ButtonProps) => {
  return (
    <ButtonWrapper onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <Text style={[Typography.TextWhite]}>{title}</Text>
      )}
    </ButtonWrapper>
  );
};

export default Button;
