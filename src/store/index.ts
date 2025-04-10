import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
//这个是state的类型
export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
