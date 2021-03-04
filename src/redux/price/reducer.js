import {
  GET_MARKET_PRICE,
  GET_MARKET_PRICE_LOADING,
  GET_COIN_PRICE,
  GET_COIN_PRICE_LOADING
} from './actionTypes';

const initialState = {
  marketPrice: null,
  marketPriceLoading: false,
  coinPrice: null,
  coinPriceLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MARKET_PRICE:
      return {
        ...state,
        marketPrice: payload,
        marketPriceLoading: false
      };
    case GET_MARKET_PRICE_LOADING:
      return { ...state, marketPriceLoading: true };
    case GET_COIN_PRICE:
      return {
        ...state,
        coinPrice: payload,
        coinPriceLoading: false
      };
    case GET_COIN_PRICE_LOADING:
      return { ...state, coinPriceLoading: true };
    default:
      return state;
  }
};
