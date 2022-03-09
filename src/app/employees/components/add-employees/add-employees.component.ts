import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from 'src/app/common/service/employees-service';
import { GlobalServiceParamNavigateService } from 'src/app/common/service/global-param-navigate-service';
import { EmployeeServiceParam } from '../../service/employees-service-param';
import { appGlobalConstant } from './../../../common/constant/actionTypes';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css'],
})

export class AddEmployeesComponent implements OnInit {
  employeesForm: FormGroup;
  selectedValueBirthDate: any;
  passingDataEdit: any;
  nameButtonDinamic: string = appGlobalConstant.LABEL_SAVE;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private globalServiceParamNavigateService: GlobalServiceParamNavigateService,
    private employeeServiceParam: EmployeeServiceParam,
  ) { }

  ngOnInit() {
    this.initForm();
    this.isEdit();
  }

  initForm() {
    this.employeesForm = this.formBuilder.group({
      username: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      firstName: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      lastName: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      email: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      birthDate: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      basicSalary: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      status: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      group: [appGlobalConstant.EMPLTY_VALUE, Validators.required],
      description: [appGlobalConstant.EMPLTY_VALUE, Validators.required]
    });
  }

  isEdit() {
    const dataEdit = localStorage.getItem(appGlobalConstant.DATA_EDIT);
    this.passingDataEdit = JSON.parse(dataEdit);
    if (this.passingDataEdit != appGlobalConstant.EMPLTY_VALUE && this.passingDataEdit != appGlobalConstant.UNDEFINED_VALUE) {
      this.selectedValueBirthDate = this.passingDataEdit.birthDate;
      this.employeesForm.patchValue(this.passingDataEdit);
      this.nameButtonDinamic = appGlobalConstant.LABEL_EDIT;
    }
  }

  postDataEmployee() {
    const rawData = this.employeesForm.getRawValue();
    this.formatToServer(rawData);
    if (!this.employeesForm.valid) {
      return alert("semua filed harus di isi!");
    }
    this.employeeServiceParam.dataEdit == appGlobalConstant.EMPLTY_VALUE ? this.save(rawData) : this.edit(rawData);
  }

  cancel() {
    this.succesResSavenEditData();
    this.employeeServiceParam.clearEditDataStorage();
    this.employeeServiceParam.clearDataEdirValue();
  }

  formatToServer(rawData) {
    let ngbDate = this.employeesForm.controls['birthDate'].value;
    rawData.birthDate = this.ngbDateParserFormatter.format(ngbDate); // e.g. myDate = 2017-01-01
  }

  save(rawData) {
    this.employeesService.postNewDataEmployee(rawData).subscribe({
      next: () => {
        this.succesResSavenEditData();
        alert("data berhasil di tambah")
      }, error: () => {
        alert("error save data employee");
      }
    })
  }

  edit(rawData) {
    const id = this.passingDataEdit.id;
    this.employeesService.editDataEmployee(rawData, id).subscribe({
      next: () => {
        this.succesResSavenEditData();
        alert("data berhasil di ubah");
      }, error: () => {
        alert("error edit data employee");
      }
    })
  }

  succesResSavenEditData() {
    this.employeesForm.reset();
    this.globalServiceParamNavigateService.navigateToEmployeesPage();
  }

}
