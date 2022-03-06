import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { appNavigateTo } from "../constant/actionTypes";

@Injectable({
    providedIn: 'root'
})
export class GlobalServiceParamNavigateService {

    constructor(private router: Router) { }

    navigateToAddEmployee() {
        this.router.navigate([appNavigateTo.ADD_EMPLOYEE_PAGE]);
    }

    navigateToDetailEmployee() {
        this.router.navigate([appNavigateTo.DETAIL_EMPLOYEE_PAGE]);
    }

    navigateToLoginPage() {
        this.router.navigate([appNavigateTo.LOGIN_PAGE]);
    }

    navigateToEmployeesPage() {
        this.router.navigate([appNavigateTo.EMPLOYEES_PAGE]);
    }

    navigateToContactPage() {
        this.router.navigate([appNavigateTo.CONTACT_PAGE]);
    }
}