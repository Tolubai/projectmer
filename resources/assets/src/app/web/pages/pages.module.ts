import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { p404Component } from './404/404.component';
import { VersionComponent } from './version/version.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    p404Component,
    VersionComponent
  ],
  exports: [
    p404Component,
    VersionComponent
  ],
})
export class PagesModule { }
