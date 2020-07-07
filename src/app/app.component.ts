import { Component, OnInit } from '@angular/core';
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
    constructor()
    {}



   ngOnInit()
   {
    //this.$user=this.loginservice.getUser()
   }

}
