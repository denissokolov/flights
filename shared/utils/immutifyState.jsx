import { fromJS } from 'immutable';
import assign from 'object-assign';

function immutifyState(obj) {
  const objMut = assign({}, obj);

  Object
    .keys(objMut)
    .forEach(key => {
      objMut[key] = fromJS(objMut[key]);
    });

  return objMut;
}
export default immutifyState;
