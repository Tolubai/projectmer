import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { p404Component } from './404/404.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    p404Component,
    LoginComponent,
    StatusComponent
  ],
  exports: [
    p404Component,
    LoginComponent
  ],
})
export class PagesModule { }
