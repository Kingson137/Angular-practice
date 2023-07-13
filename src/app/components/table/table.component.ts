import { Component } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  storedjson:any;
  constructor(private _king:Service1Service){}
  viewjsondetails(){
    return this._king.getjsondetails()
    .subscribe(sub=>this.storedjson=sub);
  }



}
