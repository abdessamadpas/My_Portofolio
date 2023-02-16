import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './src/reducers/rootReducer'

export const store = configureStore({
  reducer: {rootReducer},
})