import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  form: FormGroup

  error: boolean

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private Router: Router
  ) {
    this.form = _fb.group({
      "email": ["",Validators.compose([Validators.email,Validators.required])],
      "password": ["",Validators.compose([Validators.required,Validators.minLength(5)])],
    })
    this.error = false
  }

  submit(data: Object): void {
    this._auth.logIn(data).subscribe(
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
