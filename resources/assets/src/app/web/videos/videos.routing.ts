import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: VideosComponent,
    },
    {
        path: 'view',
        component: ViewComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideosRoutingModule { }
