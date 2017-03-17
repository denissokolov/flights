import { createStore } from 'redux';
import reducers from '../../shared/reducers';

function configureStore(initialState) {
  return createStore(reducers, initialState);
}
export default configureStore;
