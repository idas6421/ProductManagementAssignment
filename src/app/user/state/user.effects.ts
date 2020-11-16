import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { AuthService } from '../auth.service';
@Injectable()
export class UserEffects {
    @Effect()
    login$ = this.actions$.pipe(
        ofType(UserActions.login),
        mergeMap(action =>
            this.authService.login(action.user).pipe(
                map(res => UserActions.loginSuccess({ accessToken: res })),
                catchError(error => of(UserActions.loginFailure({ error }))))
        )
    );

    @Effect()
    users$ = this.actions$.pipe(
        ofType(UserActions.listUsers),
        mergeMap(() =>
            this.authService.users().pipe(
                map(users => UserActions.listUsersSuccess({ users })),
                catchError(error => of(UserActions.listUsersFailure({ error })))
            )
        )
    ); 

    constructor(private actions$: Actions, private authService: AuthService) { }
}
