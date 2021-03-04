import {
  GET_TOTAL_SUPPLY,
  GET_TOTAL_SUPPLY_LOADING,
  GET_PRICE,
  GET_PRICE_LOADING,
  GET_NODE_INFO,
  GET_NODE_INFO_LOADING,
  GET_LATEST_BLOCKS,
  GET_LATEST_BLOCKS_LOADING,
  GET_LATEST_TRANSACTIONS,
  GET_LATEST_TRANSACTIONS_LOADING
} from './actionTypes';

const initialState = {
  totalSupply: null,
  totalSupplyLoading: false,
  price: null,
  priceLoading: false,
  nodeInfo: null,
  nodeInfoLoading: false,
  latestBlocks: null,
  latestBlocksLoading: false,
  latestTxs: null,
  latestTxsLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOTAL_SUPPLY:
      return { ...state, totalSupply: payload, totalSupplyLoading: false };
    case GET_TOTAL_SUPPLY_LOADING:
      return { ...state, totalSupplyLoading: true };
    case GET_PRICE:
      return {
        ...state,
        price: payload,
        priceLoading: false
      };
    case GET_PRICE_LOADING:
      return { ...state, priceLoading: true };
    case GET_NODE_INFO:
      return { ...state, nodeInfo: payload, nodeInfoLoading: false };
    case GET_NODE_INFO_LOADING:
      return { ...state, nodeInfoLoading: true };
    case GET_LATEST_BLOCKS:
      return { ...state, latestBlocks: payload, latestBlocksLoading: false };
    case GET_LATEST_BLOCKS_LOADING:
      return { ...state, latestBlocksLoading: true };
    case GET_LATEST_TRANSACTIONS:
      return { ...state, latestTxs: payload, latestTxsLoading: false };
    case GET_LATEST_TRANSACTIONS_LOADING:
      return { ...state, latestTxsLoading: true };
    default:
      return state;
  }
};
