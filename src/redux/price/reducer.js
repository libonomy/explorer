import {
  GET_MARKET_PRICE,
  GET_MARKET_PRICE_LOADING,
  GET_PRICE,
  GET_PRICE_LOADING
} from './actionTypes';

const initialState = {
  marketPrice: null,
  marketPriceLoading: false,
  price: null,
  priceLoading: false
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
    case GET_PRICE:
      return {
        ...state,
        price: payload,
        priceLoading: false
      };
    case GET_PRICE_LOADING:
      return { ...state, priceLoading: true };

    default:
      return state;
  }
};
