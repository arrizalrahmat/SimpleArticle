import {
  combineSlices,
  configureStore,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';

import articleReducer from './reducers/article';
import commentReducer from './reducers/comment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineSlices({
  article: articleReducer,
  comment: commentReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['comment'], //persisted
  blacklist: ['article'], //not persisted
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
