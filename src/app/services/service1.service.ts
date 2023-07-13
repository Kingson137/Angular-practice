import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { details } from '../user';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private _http:HttpClient) { }

  getjsondetails():Observable<details[]>{
   return this._http.get<details[]>("http://localhost:3000/register");
  }

}
