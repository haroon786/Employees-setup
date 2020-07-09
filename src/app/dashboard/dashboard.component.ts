import { Component, OnInit } from '@angular/core';
import {EMPLOYEES} from '../modal/employee-list';
import {IEmployee} from '../modal/employee-modal';
import {EmployeeService} from '../Shared-Service/employee/employee.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees:IEmployee[];
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {

    this.getemployees()
  }
  getemployees():void
  {
    this.employeeservice.getemployees().subscribe(data=>this.employees=data.slice(1,5))

  }

}
