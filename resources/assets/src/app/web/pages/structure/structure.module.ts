import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { StructureComponent } from './structure.component';
import { StructureRoutingModule } from './structure.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StructureRoutingModule,
    FormsModule,
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    StructureComponent,
  ],
  exports: [
    StructureComponent
  ],
  providers: [

  ]
})


export class StructureModule { }
