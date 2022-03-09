import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceParamNavigateService } from '../common/service/global-param-navigate-service';
import { AuthService } from './../login/service/auth-service';
import { appGlobalConstant } from './../common/constant/actionTypes';
import { EmployeeServiceParam } from './../employees/service/employees-service-param';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbNavConfig] // add NgbNavConfig to the component providers
})

export class HeaderComponent implements AfterViewInit {
  @Input() islogin: any;

  constructor(
    public config: NgbNavConfig,
    private authService: AuthService,
    private globalServiceParamNavigateService: GlobalServiceParamNavigateService,
    private employeeServiceParam: EmployeeServiceParam,
  ) {
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngAfterViewInit() {
    this.islogin;
  }

  goToAddNewEmployee() {
    this.globalServiceParamNavigateService.navigateToAddEmployee();
    this.employeeServiceParam.clearEditDataStorage();
  }

  goToEmployees() {
    this.globalServiceParamNavigateService.navigateToEmployeesPage();
  }

  goToContact() {
    this.globalServiceParamNavigateService.navigateToContactPage();
  }

  goToLogin() {
    this.authService.logout();
    this.globalServiceParamNavigateService.navigateToLoginPage();
    const keyToRemove = [appGlobalConstant.LOGIN, appGlobalConstant.DATA_EMPLOYEE];
    keyToRemove.forEach(element => {
      localStorage.removeItem(element);
    });
    setTimeout(function () {
      location.reload();
    }, 10);
  }

}
