import {
  GET_All_TRANSACTIONS,
  GET_All_TRANSACTIONS_LOADING,
  GET_TRANSACTIONS_BY_HASH,
  GET_TRANSACTIONS_BY_HASH_LOADING
} from './actionTypes';

const initialState = {
  allTxs: null,
  allTxsLoading: false,
  tx: null,
  // txs: {
  //   latestTxs: []
  // },
  txLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_All_TRANSACTIONS:
      return { ...state, allTxs: payload, allTxsLoading: false };
    case GET_All_TRANSACTIONS_LOADING:
      return { ...state, allTxsLoading: true };

    case GET_TRANSACTIONS_BY_HASH:
      return { ...state, tx: payload, txLoading: false };
    case GET_TRANSACTIONS_BY_HASH_LOADING:
      return { ...state, txLoading: true };

    default:
      return state;
  }
};
