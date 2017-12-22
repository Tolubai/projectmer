import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { VideosComponent } from './videos.component';
import { VideosRoutingModule } from './videos.routing';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VideosRoutingModule,
    FormsModule,
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    VideosComponent,
    ViewComponent
  ],
  exports: [
    VideosComponent
  ],
  providers: [

  ]
})

export class VideosModule { }
