import { GET_MARKET_PRICE, GET_MARKET_PRICE_LOADING } from './actionTypes';

const initialState = {
  marketPrice: null,
  marketPriceLoading: false
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

    default:
      return state;
  }
};
