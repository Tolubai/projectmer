import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'structure-app',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.title.setTitle('Руководство мэрии');
    window.scrollTo(0, 0);
  }

}
