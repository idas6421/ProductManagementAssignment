/* NgRx */
import { createAction, props } from '@ngrx/store';
import { User } from '../user';
import { Theme } from '../../theme/theme';

export const maskUserName = createAction(
  '[User] Mask User Name'
);

export const login = createAction('[Auth] Login', props<{ user: User }>());

export const loginSuccess = createAction('[Auth] Login Success', props<{ accessToken }>());

export const loginFailure = createAction('[Auth] Login Failure', props<{ error }>());

export const logout = createAction('[Auth] Logout');

export const listUsers = createAction('[Auth] List Users');

export const listUsersSuccess = createAction('[Auth] List Users Success', props<{ users: User[]}>());

export const listUsersFailure = createAction('[Auth] List Users Failure', props<{ error: string }>());

export const setCurrentTheme = createAction('[Theme] Set Current Theme', props<{ theme: Theme }>())

