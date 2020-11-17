import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { PageNotFoundComponent } from '../app/home/page-not-found.component';

export default {
  title: 'Page Not Found',
  component: PageNotFoundComponent
} as Meta;

const Template: Story<PageNotFoundComponent> = (args: PageNotFoundComponent) => ({
  component: PageNotFoundComponent,
  props: args
});

export const PageNotFound = Template.bind({});
