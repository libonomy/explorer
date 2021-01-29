import {
  GET_ACCOUNTS_DETAIL_ADDRESS,
  GET_ACCOUNTS_DETAIL_ADDRESS_LOADING,
  GET_TRANSACTIONS_BY_ADDRESSES,
  GET_TRANSACTIONS_BY_ADDRESSES_LOADING
} from './actionTypes';

const initialState = {
  accountDetailAddress: null,
  accountDetailAddressLoading: false,
  transactionsByAddresses: null,
  transactionsByAddressesLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNTS_DETAIL_ADDRESS:
      return {
        ...state,
        accountDetailAddress: payload,
        accountDetailAddressLoading: false
      };
    case GET_ACCOUNTS_DETAIL_ADDRESS_LOADING:
      return { ...state, accountDetailAddressLoading: true };

    case GET_TRANSACTIONS_BY_ADDRESSES:
      return {
        ...state,
        transactionsByAddresses: payload,
        transactionsByAddressesLoading: false
      };
    case GET_TRANSACTIONS_BY_ADDRESSES_LOADING:
      return { ...state, transactionsByAddressesLoading: true };
    default:
      return state;
  }
};
