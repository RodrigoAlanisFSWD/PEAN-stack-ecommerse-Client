import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(
    public _auth: AuthService,
    private Router: Router
  ) {

  }

  ngOnInit(): void {
  }

  logout(): void {
    document.cookie = "token=null; max-age=0";
    this.Router.navigate(['/login']);
  }

}
