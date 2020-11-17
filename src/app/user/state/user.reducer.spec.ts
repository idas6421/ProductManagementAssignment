import * as UserReducer from './user.reducer';
import * as UserActions from './user.actions'; 
import { User } from '../user';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { base } from '../../theme/theme';

describe('user-reducer', () => {   
    let mockStore: MockStore;
    let mockGetMaskUserName: MemoizedSelector<UserReducer.UserState, boolean>;
    let state: UserReducer.UserState = null;
    beforeEach(() => {
        state = {
            maskUserName: false,
            isAuthenticated: true,
            loginToken: 'some token',
            error: '',
            currentUser: {
                email: 'admin@xyz.com',
                password: '123456',
                firstname: 'Indrani',
                lastname: 'Das'
            },
            theme: base,
            users: [
                {
                    email: 'admin@xyz.com',
                    password: '123456',
                    firstname: 'Indrani',
                    lastname: 'Das'
                },
                {
                    email: 'user@xyz.com',
                    password: '123456',
                    firstname: 'New',
                    lastname: 'User'
                }
            ]
        };
    });

    it('should return mask user name', () => {
        const state: boolean = true;
        expect(UserReducer.getMaskUserName.projector({ maskUserName: true })).toBe(state);
    });

    it('should return current logged in user', () => {        
        expect(UserReducer.getCurrentUser.projector(state).email).toBe(state.currentUser.email);
        const _state: UserReducer.UserState =  {...state };
        _state.currentUser = null;
        expect(UserReducer.getCurrentUser.projector(_state)).toBe(null);
    });

    it('should return access token', () => {        
        expect(UserReducer.getAccessToken.projector(state)).toBe(state.loginToken);
    });

    it('should return current logged-in user state', () => {        
        expect(UserReducer.getUserLoggedInState.projector(state)).toBe(state.isAuthenticated);
    });

    it('should active theme', () => {        
        expect(UserReducer.getCurrentTheme.projector(state)).toBe(state.theme);
    });

    it('should mask user name', () => {
        const createAction = UserActions.maskUserName();
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.maskUserName).toEqual(true);
    });

    it('should login with user provided details', () => {
        const createAction = UserActions.login({ user: state.currentUser });
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.currentUser.email).toEqual(state.currentUser.email);
    });

    it('should login with user provided details', () => {
        const createAction = UserActions.loginSuccess({ accessToken: state.loginToken });
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.loginToken).toEqual(state.loginToken);
    });

    it('should log errors when the login is failed', () => {
        const createAction = UserActions.loginFailure({ error: 'User does not exists.' });
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.error).toEqual('User does not exists.');
    });

    it('should log out the current logged-in user', () => {
        const createAction = UserActions.logout();
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.isAuthenticated).toEqual(false);
    });

    it('should log out the current logged-in user', () => {
        const createAction = UserActions.listUsersSuccess({ users: state.users });
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.users.length).toEqual(state.users.length);
    });

    it('should return the list of users', () => {
        const createAction = UserActions.listUsersSuccess({ users: state.users });
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.users.length).toEqual(state.users.length);
    });

    it('should handle error while fetching the list of users', () => {
        const createAction = UserActions.listUsersFailure({ error: 'request is timeout' });
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.error).toEqual('request is timeout');
    });

    it('should handle error while fetching the list of users', () => {
        const createAction = UserActions.setCurrentTheme({ theme: state.theme });
        const result = UserReducer.userReducer(state, createAction);    
        expect(result.theme).toEqual(state.theme);
    });
});
