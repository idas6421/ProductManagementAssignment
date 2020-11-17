import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getMaskUserName, State, getAccessToken } from './state/user.reducer';
import * as UserActions from './state/user.actions'
import { User } from './user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';

  maskUserName$: Observable<boolean>;

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit(): void {
    this.maskUserName$ = this.store.select(getMaskUserName);
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(): void {
    this.store.dispatch(UserActions.maskUserName());
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const user: User = {
        email: loginForm.form.value.userName,
        password: loginForm.form.value.password,
        firstname: null,
        lastname: null
      };      
      
      this.store.dispatch(UserActions.login({ user }));

      this.store.select(getAccessToken).subscribe(res =>  {
        if (res) {
          this.router.navigate(['/products']);
        }
      });      
    }    
  }
}
