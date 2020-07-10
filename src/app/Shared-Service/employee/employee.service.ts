import { Injectable } from '@angular/core';
import {IEmployee} from '../../modal/employee-modal';
import {EMPLOYEES} from '../../modal/employee-list';
import { Observable, of } from 'rxjs';
import {MessageService} from '../message/message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})


export class EmployeeService
{
  httpOptions=
  {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  private employeesUrl = 'api/employees';  // URL to web api

  constructor(private http:HttpClient, private message:MessageService){}

  getemployees():Observable<IEmployee[]>
  {
        return this.http.get<IEmployee[]>(this.employeesUrl).pipe(
          tap(_=>this.log(`fetched heroes`)),
          catchError(this.handleError<IEmployee[]>('getemployees',[]))
        );
  }
  getEmployee(id:number):Observable<IEmployee>
  {
    const url=`${this.employeesUrl}/${id}`;
    this.message.add('HeroService: fetched heroes');
    return this.http.get<IEmployee>(url).pipe(
      tap(_=>this.log(`fetched employee byy ID ${id}`)),
      catchError(this.handleError<IEmployee>('sadsaf'))

    )

  }
  addEmployee(name:IEmployee):Observable<IEmployee>
  {
     return  this.http.post<IEmployee>(this.employeesUrl,name,this.httpOptions).pipe(
        tap((newEmployee:IEmployee)=>this.log(`added employee with id ${newEmployee.id}`)),
        catchError(this.handleError<IEmployee>('addemployee'))
      )
  }
  updateEmployee(employee:IEmployee):Observable<any>
  {
    return this.http.put(this.employeesUrl,employee,this.httpOptions)
  }
  private log(message: string) {
    this.message.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation='operation',result?:T)
  {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
