import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'services-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.title.setTitle('Тарифы на городской транспорт');
    window.scrollTo(0, 0);
  }

}
