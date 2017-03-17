import { createStore, compose } from 'redux';
import DevTools from '../containers/DevTools';
import reducers from '../../shared/reducers';

const enhancer = compose(
  DevTools.instrument(),
);

function configureStore(initialState) {
  return createStore(reducers, initialState, enhancer);
}
export default configureStore;
