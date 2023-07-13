import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ZTemplateDrivenFormComponent } from './z-template-driven-form/z-template-driven-form.component';
import { UserInputComponent } from './user-input/user-input.component';

const routes: Routes = [
  {
    path:"table",
    component:TableComponent
  },
  {
    path:"template-driven-form",
    component:ZTemplateDrivenFormComponent
  },
  {
    path:"user-input",
    component:UserInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








       
        