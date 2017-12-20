import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public getScript(url) {
    let node = document.createElement('script');
    node.type = 'text/javascript';
    node.src = url;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit() {

    this.getScript('../dist/assets/js/scripts.js');
  }

}
