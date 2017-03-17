import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import flightsService from '../services/flightsService';

import reducers from '../../shared/reducers';
import * as FlightsActions from '../../shared/actions/FlightsActions';
import ConnectedRoot from '../../shared/components/Root';

function indexRoute(req, res) {
  flightsService.getList()
    .then((flights) => {
      const store = createStore(reducers);

      store.dispatch(FlightsActions.flushFlights(flights));

      const initialState = store.getState();

      const initialView = (
        <Provider store={store}>
          <ConnectedRoot />
        </Provider>
      );

      res.render('index', {
        initialState: JSON.stringify(initialState),
        componentHTML: renderToString(initialView),
      });
    })
    .catch((error) => {
      console.log(error);
      res.send('Get flights error');
    });
}

export default indexRoute;
