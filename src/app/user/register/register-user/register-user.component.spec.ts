import { TestBed } from '@angular/core/testing';
import { RegisterUserComponent } from './register-user.component';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from '../register-routing.module';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { registerReducer } from '../store/register-reducer';
import * as registerReducers from '../store/register-reducer';
import { register, registerSuccess, registerFailure } from '../store/register-actions';
import { User } from '../../user';
import { MemoizedSelector } from '@ngrx/store';
import { registerSelector } from '../store/register-selector';

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: any;
  let mockStore: MockStore;
  let mockSelector: MemoizedSelector<registerReducers.RegisterState, registerReducers.RegisterState>;
  const { location } = window;
  
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
      declarations: [RegisterUserComponent],
      imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [provideMockStore()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
    component.form.setValue({
      firstname: 'Indrani',
      lastname: 'Das',
      email: 'admin@xyz.com',
      password: '123456'
    });
    mockStore = TestBed.inject(MockStore);
    mockSelector = mockStore.overrideSelector(
      registerSelector,
      {
        isRegistered: false,
        user: null,
        token : 'some token',
        message : null
      }
    );
    //fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return the default state', () => {
    const action = {} as any;
    const result = registerReducer(undefined, action);
    expect(result).toEqual(registerReducers.initialState);
  });

  it('should NOT register a user', () => {
    const user = { firstname: 'Indrani', lastname: 'Das', email: 'admin@xyz.com', password: '123456' } as User;
    const createAction = register({user});
    const result = registerReducer(registerReducers.initialState, createAction);

    const expectedResult = {
      isRegistered: false,
      token : null,
      message: null,
      user: result.user
    };

    expect(result).toEqual(expectedResult);
  });

  it('should register a user', () => {
    const accessToken = { accessToken: null};
    const createAction = registerSuccess({accessToken});
    const result = registerReducer(registerReducers.initialState, createAction);

    const expectedResult = {
      isRegistered: true,
      token : null,
      message: null,
      user: result.user
    };

    expect(result).toEqual(expectedResult);
  });

  it('should handle register failure', () => {
    const error = { error: null};
    const createAction = registerFailure({error});
    const result = registerReducer(registerReducers.initialState, createAction);

    const expectedResult = {
      isRegistered: false,
      token : null,
      message: { error: null },
      user: result.user
    };

    expect(result).toEqual(expectedResult);
  });

  it('Should return form controls', () => {
    expect(component.f).toBe(component.form.controls);
  });
  
  it('Should handle navigate method', () => {
    component.navigate();
    expect(component.navigate).toBeTruthy();
  });

  it('Should handle form submit and navigate after successful registeration', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });

  it('Should handle error while form submit', () => {
    mockSelector.setResult({
      isRegistered: true,
      token : null,
      message: 'some error',
      user: null
    });
    mockStore.refreshState();
    component.onSubmit();

    mockSelector.setResult({
      isRegistered: true,
      token : null,
      message: null,
      user: null
    });
    mockStore.refreshState();
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });

  it('Should handle invalid form submit', () => {
    component.form.reset();
    component.form.updateValueAndValidity();
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });
});

