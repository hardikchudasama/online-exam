import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  validUserData: any = [{
    id: 1,
    username: 'User',
    password: 'User',
    firstName: 'Rahul',
    lastName: 'Patel',
    role: 'User',
  },
  {
    id: 2,
    username: 'Admin',
    password: 'Admin',
    firstName: 'Hardik',
    lastName: 'Chudasama',
    role: 'Admin',
  }]

  constructor(private route: Router) { }

  login(userData) {
    if (userData.username === 'User' && userData.password === 'User') {
      return this.validUserData[0];
    } else if (userData.username === 'Admin' && userData.password === 'Admin') {
      return this.validUserData[1];
    } else {
      localStorage.removeItem("currentUser");
      return 'Unauthorized user!'
    }
  }

  getAllUsers(){
    return this.validUserData;
  }
}
