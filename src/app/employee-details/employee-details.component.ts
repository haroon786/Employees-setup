import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {EmployeeService} from '../Shared-Service/employee/employee.service';
import { IEmployee } from '../modal/employee-modal';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() selectedHere;
 // selectedHere:IEmployee
  constructor(private route:ActivatedRoute,private location:Location,private employeeservice:EmployeeService)
   {

   }

  ngOnInit(): void {
      this.getemployee();
  }
  getemployee():void
    {
      const id=+this.route.snapshot.paramMap.get('id');
      this.employeeservice.getEmployee(id).subscribe(data=>this.selectedHere=data)
    }
    goBack(): void {
      this.location.back();
    }
    save():void
    {
      this.employeeservice.updateEmployee(this.selectedHere)
    }
}
