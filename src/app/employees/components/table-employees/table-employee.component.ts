import { Component, OnInit } from '@angular/core';
import { GlobalServiceParamNavigateService } from 'src/app/common/service/global-param-navigate-service';
import { EmployeeServiceParam } from '../../service/employees-service-param';
import { EmployeesService } from './../../../common/service/employees-service';

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
    this.refreshCountries();
  }

  ngOnInit() {
    this.getDataEmployees();
  }

  refreshCountries() {
    this.dataEmployees.map((val, i) => ({ id: i + 1, ...val })).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getDataEmployees() {
    this.employeesService.getDataEmployee().subscribe({
      next: (res) => {
        this.dataEmployees = res;
        JSON.stringify(this.dataEmployees);
      }, error: (err) => {
        this.errorInfoFetchingData();
      }
    })
  }

  errorInfoFetchingData() {
    alert("error get data employeess");
  }

  deleted(id) {
    this.employeesService.deleteDataEmployee(id).subscribe({
      next: (res) => {
        alert("data berhasil di hapus");
        this.globalServiceParamNavigateService.navigateToEmployeesPage();
        this.getDataEmployees();
      }, error: () => {
        alert("error hapus data employee");
      }
    })
  }

  edit(data) {
    localStorage.setItem("dataEdit", JSON.stringify(data));
    this.employeeServiceParam.dataEdit = data;
    this.globalServiceParamNavigateService.navigateToAddEmployee();
  }

  goToDetailEmployee(rawData) {
    localStorage.setItem("detailEmployee", JSON.stringify(rawData));
    this.globalServiceParamNavigateService.navigateToDetailEmployee();
  }
}
