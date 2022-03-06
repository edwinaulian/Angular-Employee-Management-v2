import { Component, OnInit } from '@angular/core';
import { appGlobalConstant } from './common/constant/actionTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  islogin: any;

  ngOnInit(): void {
    this.initLoginStatus();
  }

  initLoginStatus() {
    this.islogin = localStorage.getItem(appGlobalConstant.LOGIN);
  }

}
