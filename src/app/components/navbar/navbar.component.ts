import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'orange-bank';
  description = 'logo';
  url = 'assets/images/logooficial.jpg';

  constructor() { }

  ngOnInit() {
  }

}
