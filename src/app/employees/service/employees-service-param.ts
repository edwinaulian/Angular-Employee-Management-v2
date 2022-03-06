import { Injectable } from '@angular/core';

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

    
}