import { Story, Meta } from '@storybook/angular/types-6-0';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from '../app/products/product-edit/product-edit.component';
import * as productListStories from './product-list.stories';

export default {
  title: 'Product Edit Component',
  component: ProductEditComponent,
  decorators: [
      moduleMetadata({
        imports: [
            CommonModule,
            ReactiveFormsModule
        ],
        providers: [ 
          provideMockStore()
        ]
    })
  ]
} as Meta;

const Template: Story<ProductEditComponent> = (args: ProductEditComponent) => ({
  component: ProductEditComponent,
  props: args
});

export const productEdit = Template.bind({});

productEdit.args = {
    product: { ...productListStories.productList.args.products[0] }
}

