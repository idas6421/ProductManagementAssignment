import { TestBed } from "@angular/core/testing";
import { LoginComponent } from './login.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import * as LoginReducer from './state/user.reducer';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: any;
  let mockStore: MockStore;
  let mockGetMaskUserNameSelector: MemoizedSelector<LoginReducer.UserState, boolean>;
  let mockGetAccessTokenSelector: MemoizedSelector<LoginReducer.UserState, string>;
  
  beforeAll((): void => {
      delete window.location;
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.location = {
          href: '',
      };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        FormsModule
      ],
      providers: [
          provideMockStore(),
          { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
        ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    
    mockStore = TestBed.inject(MockStore);
    mockGetMaskUserNameSelector = mockStore.overrideSelector(
        LoginReducer.getMaskUserName, false
    );
    mockGetAccessTokenSelector = mockStore.overrideSelector(
        LoginReducer.getAccessToken, null
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should handle cancel() method', () => {
    component.cancel();
    expect(component.cancel).toBeTruthy();
  });

  it('should handle checkChannged() method', () => {
    component.checkChanged();
    expect(component.checkChanged).toBeTruthy();
  });

  it('should register a user', () => {
    let loginForm: NgForm = new NgForm([], []);
    loginForm.form = new FormGroup({
        email: new FormControl('admin@xyz.com'),
        password: new FormControl('123456'),
        firstname: new FormControl('Indrani'),
        lastname: new FormControl('Das')
    });
    loginForm.form.setErrors(null);

    mockGetAccessTokenSelector.setResult("some token");
    mockStore.refreshState();

    component.login(loginForm);

    mockGetAccessTokenSelector.setResult(undefined);
    mockStore.refreshState();

    component.login(loginForm);
    expect(component.login).toBeTruthy();
  });
  
  it('should register a user', () => {
    let loginForm: NgForm = new NgForm([], []);
    loginForm.form = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
        firstname: new FormControl(''),
        lastname: new FormControl('')
    });
    loginForm.form.setErrors({ required: true});
    component.login(loginForm);
    expect(component.login).toBeTruthy();
  });
});