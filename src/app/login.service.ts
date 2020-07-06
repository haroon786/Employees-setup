import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'any'

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
