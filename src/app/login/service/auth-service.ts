import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { EmployeesService } from "src/app/common/service/employees-service";
import { appGlobalConstant } from './../../common/constant/actionTypes';
import { GlobalServiceParamNavigateService } from './../../common/service/global-param-navigate-service';

@Injectable()
export class AuthService {
    retUrl: string = "employees";
    isLogin: boolean;
    username: string;
    password: string;
    loginStatus: string;

    constructor(
        private employeesService: EmployeesService,
        private router: Router,
        private globalServiceParamNavigateService: GlobalServiceParamNavigateService,
    ) {
        this.isLogin = false;
    }

    loggedIn() {
        return !!localStorage.getItem("login");
    }

    login(loginDataValue: Object): void {
        this.employeesService.postDataUser(loginDataValue).subscribe({
            next: (res) => {
                this.loginSucces(res);
            }, error: () => {
                this.loginFailed();
            }
        })
    }

    loginSucces(data) {
        this.router.navigate([this.retUrl]);
        alert(`Selamat datang ${data.username}`);
        localStorage.setItem("login", JSON.stringify(data));
        this.isLogin = true;
        this.username = data.username;
        this.password = data.password;
        setTimeout(function() {
            location.reload();
        }, 10);
        return of(this.loginStatus);
    }

    loginFailed() {
        this.globalServiceParamNavigateService.navigateToLoginPage();
    }

    logout() {
        this.isLogin = false;
        this.loginStatus = appGlobalConstant.EMPLTY_VALUE;
    }
}