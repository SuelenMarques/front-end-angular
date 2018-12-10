import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'orange-bank';
  description = 'login';
  url = 'assets/images/img-login.png';
  constructor() { }

  ngOnInit() {
  }
}


