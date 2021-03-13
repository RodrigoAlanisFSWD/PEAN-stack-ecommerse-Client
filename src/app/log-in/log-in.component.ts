import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  form: FormGroup

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = _fb.group({
      "email": ["",Validators.compose([Validators.email,Validators.required])],
      "password": ["",Validators.compose([Validators.required,Validators.minLength(5)])],
    })
  }

  ngOnInit(): void {
    console.log(this.form.get('email'));
  }

}
