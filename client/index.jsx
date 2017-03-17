import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import immutifyState from '../shared/utils/immutifyState';
import ConnectedRoot from '../shared/components/Root';

const initialState = immutifyState(__INITIAL_STATE__);
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoot />
  </Provider>,
  document.getElementById('react-view'),
);

if (__DEVTOOLS__) {
  setTimeout(() => {
    const container = document.createElement('div');
    container.setAttribute('id', 'react-devtools-root');
    document.body.appendChild(container);

    ReactDOM.render(
      <DevTools store={store} />,
      document.getElementById('react-devtools-root'),
    );
  }, 10);
}
