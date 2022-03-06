import { Component, OnInit } from '@angular/core';
import { GlobalServiceParamNavigateService } from 'src/app/common/service/global-param-navigate-service';

@Component({
  selector: 'app-detail-employees',
  templateUrl: './detail-employees.component.html',
  styleUrls: ['./detail-employees.component.css'],
})

export class DetailEmployeesComponent implements OnInit {
  dataEmployee: any;

  constructor(
    private globalServiceParamNavigateService: GlobalServiceParamNavigateService,
  ) { }

  ngOnInit() {
    const detailEmployee = localStorage.getItem("detailEmployee");
    this.dataEmployee = JSON.parse(detailEmployee);
  }

  back() {
    this.globalServiceParamNavigateService.navigateToEmployeesPage();
  }
}
