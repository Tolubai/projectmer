import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BashkaruuComponent } from './../bashkaruu/bashkaruu.component';

import { LoginComponent } from './../bashkaruu/pages/login/login.component';
import { StatusComponent } from './../bashkaruu/pages/status/status.component';
import { p404Component } from './../bashkaruu/pages/404/404.component';

import { EnsureAuthenticated } from './../services/ensure-authenticated.service';
import { LoginRedirect } from './../services/login-redirect.service';

import { UsersModule } from '../bashkaruu/users/users.module';
import { ProfileModule } from '../bashkaruu/profile/profile.module';
import { ProfileComponent } from '../bashkaruu/profile/profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginRedirect],
    data: { title: 'Login' }
  },
  {
    path: '',
    component: BashkaruuComponent,
    canActivate: [EnsureAuthenticated],
    children: [
      {
        path:'',        
        data: { title: 'Башкаруу панели' },
      },
      {
        path: 'users',
        loadChildren: () => UsersModule
      },
      {
        path: 'profile',
        loadChildren: () => ProfileModule
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
      {
        path: 'status',
        component: StatusComponent,
        canActivate: [EnsureAuthenticated],
        data: { title: 'status' }
      },
      {
        path: '404',
        component: p404Component,
        data: { title: '404' }
      },
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BashkaruuRoutingModule { }