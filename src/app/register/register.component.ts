import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = _fb.group({
      "name": ["",Validators.compose([Validators.required])],
      "username": ["",Validators.compose([Validators.required])],
      "email": ["",Validators.compose([Validators.email,Validators.required])],
      "password": ["",Validators.compose([Validators.required,Validators.minLength(5)])],
    })
  }

  ngOnInit(): void {
    console.log(this.form.get('email'));
  }

}
