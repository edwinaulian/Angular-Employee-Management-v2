import { Component, OnInit } from '@angular/core';
import { GlobalServiceParamNavigateService } from 'src/app/common/service/global-param-navigate-service';
import { EmployeeServiceParam } from '../../service/employees-service-param';
import { EmployeesService } from './../../../common/service/employees-service';
import { appGlobalConstant } from './../../../common/constant/actionTypes';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css'],
})

export class TableEmployeesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  public dataEmployees: Array<any> = [];

  constructor(
    private employeesService: EmployeesService,
    private globalServiceParamNavigateService: GlobalServiceParamNavigateService,
    private employeeServiceParam: EmployeeServiceParam,
  ) {
    this.refreshOptionData();
  }

  ngOnInit() {
    this.getDataEmployees();
  }

  refreshOptionData() {
    this.dataEmployees.map((val, i) => ({ id: i + 1, ...val })).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getDataEmployees() {
    this.employeesService.getDataEmployee().subscribe({
      next: (res) => {
        this.dataEmployees = res;
        JSON.stringify(this.dataEmployees);
      }, error: (err) => {
        this.employeeServiceParam.errorInfoFetchingData();
      }
    })
  }

  deleted(id) {
    this.employeesService.deleteDataEmployee(id).subscribe({
      next: (res) => {
        alert("data berhasil di hapus");
        this.globalServiceParamNavigateService.navigateToEmployeesPage();
        this.getDataEmployees();
      }, error: () => {
        this.employeeServiceParam.errorInfoFetchingData();
      }
    })
  }

  edit(data) {
    localStorage.setItem(appGlobalConstant.DATA_EDIT, JSON.stringify(data));
    this.employeeServiceParam.dataEdit = data;
    this.globalServiceParamNavigateService.navigateToAddEmployee();
  }

  goToDetailEmployee(rawData) {
    localStorage.setItem(appGlobalConstant.DETAIL_EMPLOYEE, JSON.stringify(rawData));
    this.globalServiceParamNavigateService.navigateToDetailEmployee();
  }
}
