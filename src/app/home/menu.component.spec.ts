import { TestBed } from "@angular/core/testing";

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { MenuComponent } from './menu.component';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: any;
  let mockStore: MockStore;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [
          provideMockStore(),
          { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
        ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance as MenuComponent;    
    mockStore = TestBed.inject(MockStore);
    component.currentUser = {
        firstname: 'Indrani',
        lastname: 'Das',
        email: 'admin@xyz.com',
        password: '123456'
    }
    //fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return logged in state', () => {
    expect(component.isLoggedIn).toBeTruthy();
  });

  it('should return logged in user full name', () => {
    expect(component.userName).toBe("Indrani Das");
    component.currentUser = null;
    expect(component.userName).toBe("");
  });

  it('should change theme', () => {
      component.toggleTheme({ currentTarget: { checked: true } });
      component.toggleTheme({ currentTarget: { checked: false } });
    expect(component.toggleTheme).toBeTruthy();
  });

  it('should logout', () => {
    component.logOut();
    expect(component.logOut).toBeTruthy();
  });

});