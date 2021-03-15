import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup
  error: boolean

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private Router: Router
  ) {
    this.form = _fb.group({
      "name": ["",Validators.compose([Validators.required])],
      "username": ["",Validators.compose([Validators.required])],
      "email": ["",Validators.compose([Validators.email,Validators.required])],
      "password": ["",Validators.compose([Validators.required,Validators.minLength(5)])],
    })
    this.error = false
  }


  submit(data: Object): void {
    this._auth.signIn(data).subscribe(
    res => {
      console.log(res);
      if (!res.auth || !res.res) {
        this.error = true
        return;
      }
      this._auth.setToken(res.token)
      this.Router.navigate(['/'])
    },
    err => {
      this.error = true
    }

    );
  }

}
