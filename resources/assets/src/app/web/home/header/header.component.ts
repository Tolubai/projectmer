import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  bodyClass: string = "home";
  headerInner: string = "headerinner";
  fixedTop: string = "fixed-top";

  constructor() { }


  ngOnInit(): void {
    $('body').addClass(this.bodyClass);
    $('header').addClass(this.fixedTop);
    $('header').removeClass(this.headerInner);
  }
  ngOnDestroy() {
    $('body').removeClass(this.bodyClass);
    $('header').removeClass(this.fixedTop);
    $('header').addClass(this.headerInner);
  }
}
