import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { LoginComponent }      from './login/login.component';
import { SharedRoutingModule } from "./shared-routing.module";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
