import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './message';
import memberReducer from './member';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    message: messageReducer,
    member: memberReducer,
  });
