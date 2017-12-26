import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home-headervideo',
  templateUrl: './headervideo.component.html',
  styleUrls: ['./headervideo.component.scss']
})
export class HeadervideoComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.title.setTitle('Главная');
  }

}
