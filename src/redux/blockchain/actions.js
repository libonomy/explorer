import { SET_ACTIVE_BLOCKCHAIN } from './actionTypes';

export const setActiveBlockchain = (blockchain) => (dispatch) => {
  localStorage.setItem('blockchain', blockchain);
  dispatch({
    type: SET_ACTIVE_BLOCKCHAIN,
    payload: blockchain
  });
};
