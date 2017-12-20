import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadervideoComponent } from './headervideo/headervideo.component';
import { NavComponent } from './nav/nav.component';
import { NewserviceComponent } from './newservice/newservice.component';
import { MediasComponent } from './medias/medias.component';
import { ProjectsComponent } from './projects/projects.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HeadervideoComponent, 
    NavComponent, 
    NewserviceComponent, 
    MediasComponent, 
    ProjectsComponent, 
    LinksComponent, 
    FooterComponent, 
    HeaderComponent
  ],
  exports: [
    HomeComponent,
    HeadervideoComponent,
    NavComponent,
    NewserviceComponent,
    MediasComponent,
    ProjectsComponent,
    LinksComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
