import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { p404Component } from './404/404.component';
import { VersionComponent } from './version/version.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { PressComponent } from './press/press.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    p404Component,
    VersionComponent,
    ContactsComponent,
    AboutComponent,
    PressComponent,
    
  ],
  exports: [
    p404Component,
    VersionComponent,
    ContactsComponent,
    AboutComponent,
    PressComponent
  ],
})
export class PagesModule { }
