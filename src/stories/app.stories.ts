import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from '../app/app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { userReducer } from 'src/app/user/state/user.reducer';
import { registerReducer } from 'src/app/user/register/store/register-reducer';
import { UserEffects } from 'src/app/user/state/user.effects';
import { RegisterEffects } from 'src/app/user/register/store/register-effects';
import { productReducer } from 'src/app/products/state/product.reducer';
import { ProductEffects } from 'src/app/products/state/product.effects';
import { ThemeService } from 'src/app/theme/theme.service';
import { ShellComponent } from 'src/app/home/shell.component';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { PageNotFoundComponent } from 'src/app/home/page-not-found.component';

export default {
    title: 'App component',
    component: AppComponent,
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    component: AppComponent,
    templateUrl: '../app/app.component.html',
    styleUrls: ['../app/app.component.css'],
    moduleMetadata: {
        declarations: [
            AppComponent,
            ShellComponent,
            WelcomeComponent,
            PageNotFoundComponent
        ],
        imports: [
            CommonModule,
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule.forRoot([], { useHash: true }),
            StoreModule.forRoot({
                'users': userReducer, 
                'register': registerReducer, 
                'products': productReducer 
            }),
            EffectsModule.forRoot([
                UserEffects, 
                RegisterEffects, 
                ProductEffects
            ]),
            BrowserAnimationsModule
        ],
        providers: [
            { provide: APP_BASE_HREF, useValue: '/' },
            ThemeService
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    },
    props: { args },
});

export const Default = Template.bind({});
