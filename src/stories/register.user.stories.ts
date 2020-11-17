import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterUserComponent } from '../app/user/register/register-user/register-user.component';
import { RegisterRoutingModule } from '../app/user/register/register-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../app/user/state/user.reducer';
import { registerReducer } from '../app/user/register/store/register-reducer';
import { LoginComponent } from '../app/user/login.component';

export default {
  title: 'Register Component',
  component: RegisterUserComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        StoreModule.forRoot({ userReducer, registerReducer }, {}),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<RegisterUserComponent> = (args: RegisterUserComponent) => ({
  component: RegisterUserComponent,
  props: args
});

export const register = Template.bind({});

export const RegisterError = Template.bind({});

RegisterError.args = {
    submitted: true
}

