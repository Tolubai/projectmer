import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./../../bashkaruu.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NavComponent implements OnInit {
  route: string;
  currentURL = '';

  constructor() {
  }
  
  ngOnInit() {
    
  }
  
  currentUrl(){
    this.currentURL = window.location.href;
  }

}
