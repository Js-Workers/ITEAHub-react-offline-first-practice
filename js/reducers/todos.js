import {ADD, GET, CHANGE, DELETE} from '../actions/todos';

export default {
  [ADD]: (state, {payload}) => {
    console.error('[ADD] payload', payload);
    return state;
  },
  [GET]: (state, {payload}) => {
    console.error('payload', payload);
    return state;
  },
  [CHANGE]: (state, {payload}) => {
    console.error('payload', payload);
    return state;
  },
  [DELETE]: (state, {payload}) => {
    console.error('[DELETE] payload', payload);
    return state.filter(item => item.id !== payload.id);
  }
};
