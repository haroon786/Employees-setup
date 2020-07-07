import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';

@Injectable({
  providedIn: EmployeeModule
//providedIn: 'root' ::used when you wants  to share  single  instance across 1 app.
//providedIn: 'any' ::used when you wants to have single instance for all eagerly loaded component.
})
export class LoginService {

  constructor() {
    console.log("login service instance")
   }

  getUser()
  {
    return of({userid:1,name:'test'})
  }
}
