import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: NewsComponent,

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
