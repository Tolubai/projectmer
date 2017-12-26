import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'press-app',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.title.setTitle('История города');
    window.scrollTo(0, 0);
  }
}
