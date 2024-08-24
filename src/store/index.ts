import {StoreConfig} from '@customTypes/State';

export default function configureStore(): StoreConfig {
  if (__DEV__) {
    const config = require('./configureStore.dev').default;
    return config();
  } else {
    const config = require('./configureStore.prod').default;
    return config();
  }
}
