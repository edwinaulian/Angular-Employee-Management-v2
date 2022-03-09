import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() { }

  onFormSubmit(loginForm): void {
    if (loginForm.invalid) {
      return alert("semua filed harus di isi");
    }
    this.postLogin(loginForm);
  }

  postLogin(loginForm): void {
    this.authService.login(loginForm.value);
  }
}
