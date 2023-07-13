import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
    name='Kingson'

    place = 'madurai'

    getPlace(){
      return this.place
    }
}
