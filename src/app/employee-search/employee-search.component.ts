import { Component, OnInit } from '@angular/core';
import {Observable,Subject} from 'rxjs';
import {debounceTime,distinctUntilChanged,switchMap} from 'rxjs/operators';
import {EmployeeService} from '../Shared-Service/employee/employee.service';
import { IEmployee } from '../modal/employee-modal';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  employess$:Observable<IEmployee[]>;
  private searchname$=new Subject<string>();
  constructor(private employeeservice:EmployeeService) { }

  search(term:string):void
  {
      this.searchname$.next(term);
  }

  ngOnInit(): void {
    this.employess$=this.searchname$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term:string)=>this.employeeservice.searchName(term)),
    )
  }

}
