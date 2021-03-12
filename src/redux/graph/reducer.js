import { GET_GRAPH_DATA, GET_GRAPH_DATA_LOADING } from './actionTypes';

const initialState = {
  coinData: null,
  coinDataLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GRAPH_DATA:
      return {
        ...state,
        coinData: payload,
        coinDataLoading: false
      };

    case GET_GRAPH_DATA_LOADING:
      return { ...state, coinDataLoading: true };
    default:
      return state;
  }
};
