import { SET_ACTIVE_BLOCKCHAIN } from './actionTypes';

const initialState = {
  name: localStorage.getItem('blockchain')
    ? localStorage.getItem('blockchain')
    : 'libonomy'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_BLOCKCHAIN:
      return { ...state, name: payload };

    default:
      return state;
  }
};
