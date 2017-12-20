import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { p404Component } from './404/404.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule
    
  ],
  declarations: [
    p404Component
  ],
  exports: [
    p404Component
  ],
})
export class PagesModule { }
