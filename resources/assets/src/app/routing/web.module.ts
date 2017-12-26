import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebComponent } from './../web/web.component';
import { HomeComponent } from '../web/home/home.component';

import { p404Component } from './../web/pages/404/404.component';
import { VersionComponent } from '../web/pages/version/version.component';

import { BashkaruuModule } from '../bashkaruu/bashkaruu.module';

import { NewsModule } from '../web/news/news.module';
import { ViewComponent } from '../web/news/view/view.component';

import { ServicesModule } from '../web/services/services.module';

import { PhotosModule } from '../web/photos/photos.module';
import { VideosModule } from '../web/videos/videos.module';
import { StructureModule } from '../web/pages/structure/structure.module';

import { ContactsComponent } from '../web/pages/contacts/contacts.component';
import { AboutComponent } from '../web/pages/about/about.component';
import { PressComponent } from '../web/pages/press/press.component';


const routes: Routes = [
  {
    path: 'bashkaruu',
    loadChildren: () => BashkaruuModule
  },
  {
    path: 'version',
    component: VersionComponent,
    data: { name: 'Версия для слабовидящих' },
  },
  {   
    path:'',
    component: WebComponent,
      children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: 'Башкы бет' },
      },
      {
        path: 'news',
        loadChildren: () => NewsModule
      },
      {
        path: 'services',
        loadChildren: () => ServicesModule
      },
      {
        path: 'photos',
        loadChildren: () => PhotosModule
      },
      {
        path: 'videos',
        loadChildren: () => VideosModule
      },
      {
        path: 'news/:id',
        component: ViewComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        data: { name: 'Контакты' },
      },
      {
        path: 'structure',
        loadChildren: () => StructureModule
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'press',
        component: PressComponent
      },
      {
        path: '404',
        component: p404Component,
        data: { name: '404' },
      },
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
