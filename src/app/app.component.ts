import { Component, OnInit } from '@angular/core';
import {LoginService} from '../app/login.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dependency-Injection';

  $user:Observable<any>;
  // loginserveice=new LoginService()
    constructor(private loginservice:LoginService)
    {}



   ngOnInit()
   {
    this.$user=this.loginservice.getUser()
   }

}
