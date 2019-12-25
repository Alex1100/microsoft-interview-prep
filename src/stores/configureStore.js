import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combinedReducer } from "../state";
import { logger } from './middlewares/logger';

import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const configureStore = function (preloadedState) {
  const middlewares = [logger, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)
  const persistedReducer = persistReducer(persistConfig, combinedReducer);
  const store = createStore(persistedReducer, undefined, composedEnhancers)
  const persistor = persistStore(store);

  return { store, persistor };
};
