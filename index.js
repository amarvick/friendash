import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const Friendash = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Friendash);