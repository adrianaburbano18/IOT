import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './login/login.component';

// PRIME NG
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AutenticacionModule { }
