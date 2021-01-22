import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData: any;
  loginUser: any;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    }),
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitLoginForm() {
    this.userData = this.authenticationService.login(this.loginForm.value);
    if (typeof this.userData === 'string') {
      alert(this.userData);
      this.router.navigate(['/']);
      this.loginForm.reset();
    } else {
      localStorage.setItem('currentUser', JSON.stringify(this.userData));
      this.router.navigate([this.returnUrl]);
    }
  }
}
