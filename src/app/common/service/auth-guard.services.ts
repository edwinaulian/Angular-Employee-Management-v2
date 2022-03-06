import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/service/auth-service';
import { GlobalServiceParamNavigateService } from './global-param-navigate-service';
@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    mediaSub: Subscription;

    constructor(
        private globalServiceParam: GlobalServiceParamNavigateService,
        private authService: AuthService) { }

    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            return true;
        } else {
            this.globalServiceParam.navigateToLoginPage();
            return false;
        }
    }
}