import { fromJS } from 'immutable';

const defaultState = fromJS({
  items: [],
  carriers: [],
  carriersFilter: '',
});

function FlightsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'FLUSH_FLIGHTS':
      return state
        .set('items', fromJS(action.items))
        .set('carriers', fromJS(action.items.map(item => item.carrier).filter((x, i, a) => a.indexOf(x) === i)));

    case 'CHANGE_CARRIERS_FILTER':
      return state.set('carriersFilter', action.value);

    default:
      return state;
  }
}
export default FlightsReducer;
