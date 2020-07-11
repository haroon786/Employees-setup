import { Component, OnInit } from "@angular/core";
import { IEmployee } from "../modal/employee-modal";
import {EmployeeService} from '../../app/Shared-Service/employee/employee.service';
import { MessageService } from '../Shared-Service/message/message.service';
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  Employees:IEmployee[];
  selectedHere: IEmployee;
  displayedColumns: string[] = ["id", "name"];
  constructor(private employeeservice:EmployeeService,private messageservice:MessageService) {}


  ngOnInit(): void {
    this.employeeservice.getemployees().subscribe(data=>this.Employees=data)
  }
  onSelect(employee: IEmployee) {
    this.selectedHere = employee;
    this.messageservice.add(`employee fetched:${employee.name}`)
    console.log(this.selectedHere);
  }
  add(name:string):void
  {
    name=name.trim();
    if(!name){return;}
    this.employeeservice.addEmployee({ name } as IEmployee)
    .subscribe(emploee=>this.Employees.push(emploee))
  }
  delete(hero: IEmployee): void {
    this.Employees = this.Employees.filter(h => h !== hero);
    this.employeeservice.deleteHero(hero).subscribe();
  }
}
