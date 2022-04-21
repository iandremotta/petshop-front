import { Router } from '@angular/router';
import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/ults/security.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: User;
  constructor(private _router: Router) {
    this.user = Security.getUser();
  }

  ngOnInit(): void {
  }

  logout() {
    Security.clear();
    this._router.navigate(['/login']);
  }

}
