import { configureStore } from '@reduxjs/toolkit'

import employeesReducer from '../features/employees/employeesSlice'
import modalReducer from '../features/modal/modalSlice'

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {auth: AuthState, user: UserState}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
