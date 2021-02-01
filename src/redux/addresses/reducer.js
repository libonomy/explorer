import {
  GET_ACCOUNT_DETAILS,
  GET_ACCOUNT_DETAILS_LOADING,
  GET_TRANSACTIONS_BY_ADDRESS,
  GET_TRANSACTIONS_BY_ADDRESS_LOADING
} from './actionTypes';

const initialState = {
  details: null,
  detailsLoading: false,
  txs: null,
  txsLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNT_DETAILS:
      return {
        ...state,
        details: payload,
        detailsLoading: false
      };
    case GET_ACCOUNT_DETAILS_LOADING:
      return { ...state, detailsLoading: true };

    case GET_TRANSACTIONS_BY_ADDRESS:
      return {
        ...state,
        txs: payload,
        txsLoading: false
      };
    case GET_TRANSACTIONS_BY_ADDRESS_LOADING:
      return { ...state, txsLoading: true };
    default:
      return state;
  }
};
