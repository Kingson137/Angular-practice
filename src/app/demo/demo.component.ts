import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  username!: string;
  phone!: number;
  age!: number;
  stored!: object;

  store(): void{
    const userinput={
      username:this.username,
      phone:this.phone,
      age:this.age
    };
    this.stored=userinput
  }

}
