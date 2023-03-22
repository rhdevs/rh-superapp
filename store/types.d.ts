import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { ThunkAction, AnyAction } from '@reduxjs/toolkit'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
