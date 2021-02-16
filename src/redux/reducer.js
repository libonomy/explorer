import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import infoReducer from './info/reducer';
import blocksReducer from './blocks/reducer';
import txsReducer from './txs/reducer';
import supplyReducer from './supply/reducer';
import addressesReducer from './addresses/reducer';
import priceReducer from './price/reducer';
export default combineReducers({
  auth: authReducer,
  info: infoReducer,
  blocks: blocksReducer,
  txs: txsReducer,
  supply: supplyReducer,
  addresses: addressesReducer,
  price: priceReducer
});
