import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';

@Component({
  selector: 'photos-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }



  ngOnInit(): void{

    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 5,
        imageAnimation: 'slide',
        thumbnailsRemainingCount: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },  
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'dist/assets/img/posts/1.png',
        medium: 'dist/assets/img/posts/1.png',
        big: 'dist/assets/img/posts/1.png'
      },
      {
        small: 'dist/assets/img/posts/2.png',
        medium: 'dist/assets/img/posts/2.png',
        big: 'dist/assets/img/posts/2.png'
      },
      {
        small: 'dist/assets/img/posts/3.png',
        medium: 'dist/assets/img/posts/3.png',
        big: 'dist/assets/img/posts/3.png'
      },
      {
        small: 'dist/assets/img/posts/4.png',
        medium: 'dist/assets/img/posts/4.png',
        big: 'dist/assets/img/posts/4.png'
      },
      {
        small: 'dist/assets/img/posts/5.png',
        medium: 'dist/assets/img/posts/5.png',
        big: 'dist/assets/img/posts/5.png'
      },
      {
        small: 'dist/assets/img/posts/6.png',
        medium: 'dist/assets/img/posts/6.png',
        big: 'dist/assets/img/posts/6.png'
      },
      {
        small: 'dist/assets/img/posts/6.png',
        medium: 'dist/assets/img/posts/6.png',
        big: 'dist/assets/img/posts/6.png'
      },
      {
        small: 'dist/assets/img/posts/6.png',
        medium: 'dist/assets/img/posts/6.png',
        big: 'dist/assets/img/posts/6.png'
      },
      {
        small: 'dist/assets/img/posts/6.png',
        medium: 'dist/assets/img/posts/6.png',
        big: 'dist/assets/img/posts/6.png'
      }
    ];
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
