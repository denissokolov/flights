import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import flightsService from '../services/flightsService';

import reducers from '../../shared/reducers';
import ConnectedRoot from '../../shared/components/Root';
import immutifyState from '../../shared/utils/immutifyState';

function indexRoute(req, res) {
  flightsService.getList()
    .then((flights) => {
      const store = createStore(reducers, immutifyState({ flights }));

      const initialView = (
        <Provider store={store}>
          <ConnectedRoot />
        </Provider>
      );

      res.render('index', {
        componentHTML: renderToString(initialView),
      });
    })
    .catch((error) => {
      console.log(error);
      res.send('Get flights error');
    });
}

export default indexRoute;
