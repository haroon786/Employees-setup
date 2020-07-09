import { Injectable } from '@angular/core';
import {IEmployee} from '../../modal/employee-modal';
import {EMPLOYEES} from '../../modal/employee-list';
import { Observable, of } from 'rxjs';
import {MessageService} from '../message/message.service';
@Injectable({
  providedIn:'any'
})


export class EmployeeService
{
  constructor(private message:MessageService){}

  getemployees():Observable<IEmployee[]>
  {
        return of(EMPLOYEES)
  }
  getEmployee(id:number):Observable<IEmployee>
  {
    this.message.add('HeroService: fetched heroes');
    return of(EMPLOYEES.find(e=>e.id===id));

  }
}
