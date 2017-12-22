import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { SampleComponent } from '../services/sample/sample.component';

const routes: Routes = [
    {
        path: '',
        component: ServicesComponent,
    },
    {
        path: 'sample',
        component: SampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }
