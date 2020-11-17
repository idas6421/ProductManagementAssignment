import { User } from '../user';

/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as UserActions from './user.actions';
import * as AppState from '../../state/app.state';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Theme, base } from '../../theme/theme';


export interface State extends AppState.State {
  users: UserState;
}

// State for this feature (User)
export interface UserState {
  maskUserName: boolean;
  isAuthenticated: boolean;
  loginToken: string;
  currentUser: User;
  users: User[],
  theme: Theme,
  error: string;
}

const initialState: UserState = {
  maskUserName: true,
  isAuthenticated: false,
  loginToken: '',
  error: '',
  currentUser: null,
  theme: base,
  users: []
};

export const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => {
    return state?.currentUser ? state.users.find(f=> f.email === state.currentUser.email) : null
  }
);

export const getAccessToken = createSelector(
  getUserFeatureState, 
  state => state.loginToken
);

export const getUserLoggedInState = createSelector(
  getUserFeatureState, (state): boolean => state?.isAuthenticated
);

export const getCurrentTheme = createSelector(
  getUserFeatureState, (state): Theme => state?.theme
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, (state): UserState => {
    return {
      ...state,
      maskUserName: !state?.maskUserName
    };
  }),
  on(UserActions.login, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user
    };
  }),
  on(UserActions.loginSuccess, (state, action): UserState => {
    return {
      ...state,
      isAuthenticated: true,
      loginToken: action.accessToken,
      error: ''
    };
  }),
  on(UserActions.loginFailure, (state, action): UserState => {
    return {
      ...state,
      isAuthenticated: false,
      currentUser: null,
      loginToken: null,
      error: action.error,
    };
  }),
  on(UserActions.logout, (state): UserState => {
    return {
      ...state,
      isAuthenticated: false,
      currentUser: null,
      loginToken: null,
      error: ''
    };
  }),
  on(UserActions.listUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users
    }
  }),
  on(UserActions.listUsersFailure, (state, action): UserState => {
    return {
      ...state,
      users: [],
      error: action.error,
    };
  }),
  on(UserActions.setCurrentTheme, (state, action): UserState => {
    return {
      ...state,
      theme: action.theme
    }
  })
);