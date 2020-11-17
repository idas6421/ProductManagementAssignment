import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ShellComponent } from '../app/home/shell.component';
import { MenuComponent } from '../app/home/menu.component';
import { productReducer } from '../app/products/state/product.reducer';

export default {
  title: 'Shell Component',
  component: ShellComponent,
  decorators: [
    moduleMetadata({
        declarations: [ MenuComponent ],
        imports: [ 
            CommonModule, 
            RouterTestingModule,
            StoreModule.forRoot({ productReducer }, {})
        ]
    })
  ]
} as Meta;

const Template: Story<ShellComponent> = (args: ShellComponent) => ({
  component: ShellComponent,
  props: args
});

export const shell = Template.bind({});
