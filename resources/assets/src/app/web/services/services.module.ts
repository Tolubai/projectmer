import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ServicesRoutingModule,
    FormsModule,
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    ServicesComponent,
    SampleComponent
  ],
  exports: [
    ServicesComponent
  ],
  providers: [
    
  ]
})
export class ServicesModule { }
