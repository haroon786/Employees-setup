import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'employe',component:EmployeeListComponent},
  { path: 'detail/:id', component: EmployeeDetailsComponent },

{ path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
{ path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
