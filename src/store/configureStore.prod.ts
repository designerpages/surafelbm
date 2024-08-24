import createSagaMiddleware, {END} from '@redux-saga/core';
import {applyMiddleware, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers';
import {SagaStore, StoreConfig} from '@customTypes/State';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['loading'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(): StoreConfig {
  const sagaMiddleware = createSagaMiddleware();
  const store = <SagaStore>(
    createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  );
  const persistor = persistStore(store);

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return {persistor, store};
}
