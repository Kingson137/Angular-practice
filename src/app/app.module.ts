import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirStruc1Component } from './dir-struc1/dir-struc1.component';
import { DirStru2Component } from './dir-stru2/dir-stru2.component';
import { DirStruc3Component } from './dir-struc3/dir-struc3.component';
import { DirStruc4Component } from './dir-struc4/dir-struc4.component';
import { DirStruc5Component } from './dir-struc5/dir-struc5.component';
import { DirStruc6Component } from './dir-struc6/dir-struc6.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { TableComponent } from './components/table/table.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BmiComponent } from './bmi/bmi.component';
import { UserInputComponent } from './user-input/user-input.component';
import { DemoComponent } from './demo/demo.component';
import { ZTemplateDrivenFormComponent } from './z-template-driven-form/z-template-driven-form.component';
import { ZReactiveFormComponent } from './z-reactive-form/z-reactive-form.component';
import { TaskLoginComponent } from './task-login/task-login.component';
import { TaskLoginTempComponent } from './task-login-temp/task-login-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloComponent,
    TwoWayBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DirStruc1Component,
    DirStru2Component,
    DirStruc3Component,
    DirStruc4Component,
    DirStruc5Component,
    DirStruc6Component,
    PipesComponent,
    HttpclientComponent,
    TableComponent,
    ToDoListComponent,
    BmiComponent,
    UserInputComponent,
    DemoComponent,
    ZTemplateDrivenFormComponent,
    ZReactiveFormComponent,
    TaskLoginComponent,
    TaskLoginTempComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
