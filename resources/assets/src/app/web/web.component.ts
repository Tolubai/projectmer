import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  viewProviders: [Title],
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  currentURL = '';
 
  constructor(private title: Title ) {
    title.setTitle('Башкы бет');
  }

  ngOnInit() {

  }
  currentUrl(){
    this.currentURL = window.location.href;
  }
}

