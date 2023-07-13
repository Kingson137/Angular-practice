import { Component } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-z-template-driven-form',
  templateUrl: './z-template-driven-form.component.html',
  styleUrls: ['./z-template-driven-form.component.css']
})
export class ZTemplateDrivenFormComponent {
    
    

    countryList = [
      { "countryname": "India"},
      { "countryname": "USA"},
      { "countryname": "Japan"}
    ];

    onSubmit(myForm:NgForm){
      console.log("myForm");
    }

}

/*  username!: string;
            submitForm(value:string){
              console.log(value);
            }*/