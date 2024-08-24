import React from 'react';
import {TextInputWrapper, TextInputField} from './styles';
import {InputFieldProps} from '@customTypes/Components';

const InputField = ({
  placeholder,
  value,
  onChange,
  multiline,
}: InputFieldProps) => {
  return (
    <TextInputWrapper>
      <TextInputField
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        multiline={multiline}
        style={multiline ? {height: 100} : {}}
      />
    </TextInputWrapper>
  );
};

export default InputField;
