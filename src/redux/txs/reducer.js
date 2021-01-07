import {
  GET_All_TRANSACTIONS,
  GET_All_TRANSACTIONS_LOADING
} from './actionTypes';

const initialState = {
  latestTxs: null,
  latestTxsLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_All_TRANSACTIONS:
      return { ...state, latestTxs: payload, latestTxsLoading: false };
    case GET_All_TRANSACTIONS_LOADING:
      return { ...state, latestTxsLoading: true };

    default:
      return state;
  }
};
