import { Story, Meta } from '@storybook/angular/types-6-0';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { Product } from '../app/products/product';
import { ProductListComponent } from '../app/products/product-list/product-list.component';

const products: Product[] = [
    {
      id: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      description: 'Leaf rake with 48-inch wooden handle',
      starRating: 3.2
    } as Product,
    {
      id: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      description: '15 gallon capacity rolling garden cart',
      starRating: 4.2
    } as Product,
    {
      id: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      description: 'Curved claw steel hammer',
      starRating: 4.8
    } as Product,
    {
      id: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      description: '15-inch steel blade hand saw',
      starRating: 3.7
    } as Product,
    {
      id: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      description: 'Standard two-button video game controller',
      starRating: 4.6
    } as Product,
    {
      id: 13,
      productName: 'HP Laptop',
      productCode: 'OPU-0099',
      description: '',
      starRating: 4
    } as Product
  ];

export default {
  title: 'Product List Component',
  component: ProductListComponent,
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

const Template: Story<ProductListComponent> = (args: ProductListComponent) => ({
  component: ProductListComponent,
  props: { args, products: products }
});

export const productList = Template.bind({});

productList.args = {
    products: products
}

