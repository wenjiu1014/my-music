import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { IRootState, AppDispatch } from '..'

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
