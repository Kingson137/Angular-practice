import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-login',
  templateUrl: './task-login.component.html',
  styleUrls: ['./task-login.component.css']
})
export class TaskLoginComponent {

  login!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'uname': new FormControl(''),
      'passwords': new FormControl('')
    })
  }

  logindata(login: FormGroup) {

  }

}
