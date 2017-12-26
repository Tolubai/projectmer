import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(
    private title: Title,
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.title.setTitle('Пресс центр');
    window.scrollTo(0, 0);
  }

}
