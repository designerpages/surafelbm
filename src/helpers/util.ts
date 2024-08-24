import Toast from 'react-native-toast-message';

export const truncate = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + '...';
  } else {
    return str;
  }
};

export const showToast = (
  message: string,
  title?: string,
  success?: string,
) => {
  Toast.show({
    type: success || 'error',
    text1: title || 'Error',
    text2: message,
  });
};
