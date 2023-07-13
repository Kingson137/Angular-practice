import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
   varDate= new Date();
   
   message='Hello Kingson'


   app='Content Slice'

   price=125;
}
