import { fromJS } from 'immutable';

const defaultState = fromJS({
  items: [],
  carriers: [],
});

function FlightsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'FLUSH_FLIGHTS':
      return state
        .set('items', fromJS(action.items))
        .set('carriers', fromJS(action.items.map(item => item.carrier).filter((x, i, a) => a.indexOf(x) === i)));

    default:
      return state;
  }
}
export default FlightsReducer;
