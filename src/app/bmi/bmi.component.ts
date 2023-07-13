import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  
  @Input() weight: number = 0;
  @Input() height: number = 0;

  calculateBMI() {
    return (this.weight / (this.height * this.height));
  }
}
