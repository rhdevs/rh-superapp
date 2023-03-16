import { ICredentials, IStar, IUser, initialUserState } from './types'
// import { setUser } from './reducer'
// import authService from '../../services/auth'
// import { AppThunk } from '..'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export const acSetUser = (user: IUser): AppThunk<Promise<PayloadAction<IUser>>> => {
//   return async (dispatch) => {
//     return dispatch(setUser(user))
//   }
// }
// export const acUserUpdateProfile = (user: FormData): AppThunk<Promise<PayloadAction<IUser>>> => {
//   return async (dispatch) => {
//     const updatedUser: IUser = await authService.update(user)
//     return dispatch(setUser(updatedUser))
//   }
// }
// export const acUserLogin = (credentials: ICredentials): AppThunk<Promise<PayloadAction<IUser>>> => {
//   return async (dispatch) => {
//     const user: IUser = await authService.login(credentials)
//     return dispatch(setUser(user))
//   }
// }
// export const acUserLogout = (): AppThunk<Promise<PayloadAction<IUser>>> => {
//   return async (dispatch) => {
//     await authService.logout()
//     return dispatch(setUser(initialUserState))
//   }
// }
// export const acUserSignUp = (
//   credentials: ICredentials,
// ): AppThunk<Promise<PayloadAction<IUser>>> => {
//   return async (dispatch) => {
//     const user: IUser = await authService.signup(credentials)
//     return dispatch(setUser(user))
//   }
// }
