import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserState, getCurrentUser, getCurrentTheme } from '../user/state/user.reducer';
import * as UserActions from '../user/state/user.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { ThemeService } from '../theme/theme.service';
import { Theme, dark, base } from '../theme/theme';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  activeTheme: Theme;
  availableThemes: Theme[];
  currentUser: User;
  pageTitle = 'Product Management';
  isChecked: boolean;

  get isLoggedIn(): boolean {
    return this.currentUser ? true : false;
  }

  get userName(): string {
    if (this.currentUser) {
      return this.currentUser.firstname + ' ' + this.currentUser.lastname;
    }
    return '';
  }

  constructor(private store: Store<UserState>, 
    private router: Router,
    private themeService: ThemeService
  ) { 
    this.availableThemes = this.themeService.getAvailableThemes();
    this.store.select(getCurrentTheme).subscribe( theme=> { 
      this.activeTheme = theme; 
      this.isChecked = this.activeTheme === dark;
    });
  }

  ngOnInit(): void {
    this.store.select(getCurrentUser).subscribe( user => this.currentUser = user);
    this.store.dispatch(UserActions.listUsers());
  }

  toggleTheme($event) { 
    let _theme: Theme = base; 
    if($event.currentTarget.checked) _theme = dark;
    this.themeService.setActiveTheme(_theme);
    this.store.dispatch(UserActions.setCurrentTheme({ theme: _theme}));
  }

  logOut(): void {
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/welcome']);
  }
}
