import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Main from './Main';
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;