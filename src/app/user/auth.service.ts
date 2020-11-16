import { Injectable } from '@angular/core';

import { User } from './user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser: User | null;
    redirectUrl: string;

    constructor(private http: HttpClient) { }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(user: User): any {
        return this.http.post(environment.loginUrl, user)
        .pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
      }

    logout(): void {
        this.currentUser = null;
    }

    users(): Observable<User[]> {
        return this.http.get<User[]>(environment.usersUrl)
        .pipe(
            map(users => users),
            catchError(this.handleError)
        );
    }
    

    private handleError(err: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
