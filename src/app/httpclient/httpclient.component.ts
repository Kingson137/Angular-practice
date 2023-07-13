import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
     
       users:User[]=[]

      constructor(private http:HttpClient){

      }
    ngOnInit() {
      this.getUsers().subscribe((response)  => {
        //console.log('response:',response)
        this.users = response;
      })
    }

      getUsers(){
       return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
      }
}

class User {
   name!:string;
   email!:string
}
