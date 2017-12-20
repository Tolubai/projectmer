import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { NewsRoutingModule } from './news.routing';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../shared/post/post.service';
import { ViewComponent } from './view/view.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NewsRoutingModule,
    FormsModule,
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    NewsComponent,
    ViewComponent,    
  ],
  exports: [
    NewsComponent
  ],
  providers: [
    PostService
  ]
})
export class NewsModule { }
