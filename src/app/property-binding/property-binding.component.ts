import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  
  
  color='red';
  
  fruit = 'welcome to fruit shop';

  isdisabled =true;

  ball = 'football';

}
