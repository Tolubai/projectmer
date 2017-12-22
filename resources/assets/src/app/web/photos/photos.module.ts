import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos.routing';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PhotosRoutingModule,
    FormsModule,
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    PhotosComponent,
    ViewComponent
  ],
  exports: [
    PhotosComponent
  ],
  providers: [

  ]
})
export class PhotosModule { }
