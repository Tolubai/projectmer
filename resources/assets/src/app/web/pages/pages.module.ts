import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { p404Component } from './404/404.component';
import { VersionComponent } from './version/version.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    p404Component,
    VersionComponent,
    ContactsComponent
  ],
  exports: [
    p404Component,
    VersionComponent,
    ContactsComponent
  ],
})
export class PagesModule { }
