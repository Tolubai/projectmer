import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

// Users components
import { RegisterComponent } from './register/register.component';
import { AllComponent } from './all/all.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [
    RegisterComponent,
    AllComponent,
    UsersComponent
  ]
})

export class UsersModule { }
