/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import rootSaga from '@store/sagas';
import configureStore from '@store/index';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from '@navigation/AppNavigator';
import Toast from 'react-native-toast-message';
const {persistor, store} = configureStore();
store.runSaga(rootSaga);

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        <Toast />
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
