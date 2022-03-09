import { Injectable } from '@angular/core';
import { appGlobalConstant } from './../../common/constant/actionTypes';
@Injectable({
    providedIn: 'root'
})
export class EmployeeServiceParam {
    dataEdit: any;

    constructor() {
    }

    clearEditDataStorage() {
        localStorage.removeItem("dataEdit");
    }

    clearDataEdirValue() {
        this.dataEdit = appGlobalConstant.EMPLTY_VALUE;
    }

    errorInfoFetchingData() {
        alert("error fetching data");
    }


}