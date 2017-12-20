import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebComponent } from './../web/web.component';
import { p404Component } from './../web/pages/404/404.component';
import { BashkaruuModule } from '../bashkaruu/bashkaruu.module';

import { HomeComponent } from '../web/home/home.component';
import { NewsModule } from '../web/news/news.module';
import { ViewComponent } from '../web/news/view/view.component';

const routes: Routes = [
  {
    path: 'bashkaruu',
    loadChildren: () => BashkaruuModule
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
        path: 'news/:id',
        component: ViewComponent,
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