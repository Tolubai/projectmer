import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'about-app',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
