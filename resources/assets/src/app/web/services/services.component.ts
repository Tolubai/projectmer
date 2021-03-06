import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'services-home',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.title.setTitle('Услуги');
    window.scrollTo(0, 0);
  }
}
