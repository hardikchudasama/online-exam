import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: any;

  constructor(private authenticationService: AuthenticationService) {
    this.users = this.authenticationService.getAllUsers();
  }

  ngOnInit() {
  }

}
