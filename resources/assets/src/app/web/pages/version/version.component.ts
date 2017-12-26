import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'version-app',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

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
