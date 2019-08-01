/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './app/screens/index';
import { name as appName } from './app.json';
import configureStore from './app/store';

const store = configureStore();

const RNApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNApp);
