import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MenuComponent } from '../app/home/menu.component';
import { userReducer } from '../app/user/state/user.reducer';

export default {
  title: 'Menu Component',
  component: MenuComponent,
  decorators: [
      moduleMetadata({
          imports: [
              StoreModule.forRoot({ userReducer }, {}),
              RouterTestingModule
          ]
      })
  ]
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args
});

export const menu = Template.bind({});
