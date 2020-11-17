import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../app/user/state/user.reducer';
import { registerReducer } from '../app/user/register/store/register-reducer';
import { WelcomeComponent } from '../app/home/welcome.component';

export default {
  title: 'Welcome Component',
  component: WelcomeComponent
} as Meta;

const Template: Story<WelcomeComponent> = (args: WelcomeComponent) => ({
  component: WelcomeComponent,
  props: args
});

export const welcome = Template.bind({});
