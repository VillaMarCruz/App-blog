import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';

import { SignInEmail } from '@store/user/user.actions';

import { UsernamePasswordCredentials } from '@store/user/user.models';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  loading$ !: Observable<boolean | null>;

  private store = inject(Store<any>);

  login(form: NgForm) {
    const userLoadingRequest : UsernamePasswordCredentials = {
      username: form.value.email,
      password: form.value.password
    };

    this.store.dispatch(new SignInEmail(userLoadingRequest));
  }
}
