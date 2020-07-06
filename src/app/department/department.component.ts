import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private loginservice:LoginService)
  {
    console.log("loginservice  in Department")
  }

  ngOnInit() {
  }

}
