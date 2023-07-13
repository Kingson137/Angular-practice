import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  name!: string ;
  phone!: number ;
  age!: number ;
  stored!: object ;

  store(): void {
    const userin = {
      name: this.name,
      phone: this.phone,
      age: this.age
    };

    this.stored = userin;
  }
}
