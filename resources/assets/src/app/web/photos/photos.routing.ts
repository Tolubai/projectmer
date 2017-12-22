import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosComponent } from './photos.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: PhotosComponent,
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
export class PhotosRoutingModule { }
