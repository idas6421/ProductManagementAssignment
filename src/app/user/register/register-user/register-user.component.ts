import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from '../../user';
import * as RegisterActions from '../store/register-actions';
import { registerSelector } from '../store/register-selector';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})

export class RegisterUserComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  user: User;
  registerResponse: any;
  error: string;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    // Build Register Form
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get f(): any { return this.form.controls; }

  // Register user actions
  onSubmit(): void {
    this.submitted = true;
    // Register user payload
    const payload = {
      firstname: this.f.firstname.value,
      lastname: this.f.lastname.value,
      email: this.f.email.value,
      password: this.f.password.value
    };

    if (this.form.valid) {
      this.store.dispatch(RegisterActions.register({ user: payload})); // Dispatch register action
      this.store.select(registerSelector).subscribe( response => {
      this.registerResponse = response;
      if (response.token) {
        this.navigate(); // call navigate after successful registeration
      } else {
        if (response.message) {
          this.error = response.message; // catch error
        }
      }
    });
   }
  }

  // Navigate to login page function
  navigate(): void {
    window.location.href = '/login'; // redirect to login page
  }
}

