import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appGlobalConstant } from './common/constant/actionTypes';
import { AuthGuardService } from './common/service/auth-guard.services';
import { ContactComponent } from './contact/contact.component';
import { AddEmployeesComponent } from './employees/components/add-employees/add-employees.component';
import { DetailEmployeesComponent } from './employees/components/detail-employees/detail-employees.component';
import { EmployeesComponent } from './employees/components/employees.component';
import { LoginComponent } from './login/components/login.component';

const routes: Routes = [
    { path: appGlobalConstant.EMPLTY_VALUE, component: LoginComponent,  },
    { path: appGlobalConstant.LOGIN, component: LoginComponent },
    { path: appGlobalConstant.CONTACT, component: ContactComponent, canActivate: [AuthGuardService] },
    { path: appGlobalConstant.EMPLOYEES, component: EmployeesComponent, canActivate: [AuthGuardService] },
    { path: appGlobalConstant.ADD_DATA_EMPLOYEE, component: AddEmployeesComponent, canActivate: [AuthGuardService] },
    { path: appGlobalConstant.DETAIL_EMPLOYEE, component: DetailEmployeesComponent, canActivate: [AuthGuardService] },
];
@NgModule({
    imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
})
export class AppRoutingModule { }