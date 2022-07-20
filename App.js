import React from 'react';
import Routers from './src/router/Routers';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routers />
      </Provider>
    </>
  );
};

export default App;
