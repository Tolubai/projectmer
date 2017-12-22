import { NgModule } from '@angular/core';

import { WebComponent } from './web.component';
import { WebRoutingModule } from './../routing/web.module';
import { PagesModule } from './pages/pages.module';
import { HomeModule } from './home/home.module';
import { ComponentsModule } from './components/components.module';
import { NewsModule } from './news/news.module';
import { ServicesModule } from './services/services.module';
import { PhotosModule } from './photos/photos.module';
import { VideosModule } from './videos/videos.module';

@NgModule({
    imports: [
        WebRoutingModule,
        PagesModule,
        HomeModule,
        ComponentsModule,
        NewsModule,
        ServicesModule,
        PhotosModule,
        VideosModule
    ],
    declarations: [
        WebComponent
    ]
})
export class WebModule { }
