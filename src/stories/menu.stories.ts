import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from '../app/home/menu.component';
import { base } from 'src/app/theme/theme';

export default {
  title: 'Menu Component',
  component: MenuComponent,
  decorators: [
      moduleMetadata({
          imports: [
              RouterTestingModule
          ],
          providers: [
            provideMockStore()
          ]
      })
  ]
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args
});

export const menu = Template.bind({});
