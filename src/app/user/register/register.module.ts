import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/register-effects';
import { registerReducer } from './store/register-reducer';

@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('register', registerReducer),
    EffectsModule.forFeature([RegisterEffects])
  ]
})

export class RegisterModule { }