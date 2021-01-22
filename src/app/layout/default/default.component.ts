import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  loginUser: any;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  logout() {
    localStorage.removeItem("currentUser");
    this.route.navigate(['/login'])
  }

}
