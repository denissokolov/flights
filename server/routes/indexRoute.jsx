import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import fs from 'fs';

import reducers from '../../shared/reducers';
import Root from '../../shared/components/Root';
import immutifyState from '../../shared/utils/immutifyState';

function indexRoute(req, res) {
  fs.readFile(`${__dirname}/../../data.json`, 'utf8', (readError, content) => {
    if (readError) {
      console.log(readError);
      res.send('Error: get data from file');
    } else {
      let data;
      try {
        data = JSON.parse(content);
      } catch (parseError) {
        console.log(parseError);
        res.send('Error: parse data from file');
      }

      const initialState = immutifyState({
        flights: data.flights,
      });

      const store = createStore(reducers, initialState);

      const initialView = (
        <Provider store={store}>
          <Root />
        </Provider>
      );

      res.render('index', {
        componentHTML: renderToString(initialView),
      });
    }
  });
}

export default indexRoute;
