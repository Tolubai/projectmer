import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./../../bashkaruu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllComponent implements OnInit {
  message = '';
  dtOptions: DataTables.Settings = {};
  constructor(private zone: NgZone) { }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
  }

  ngOnInit() {
    this.dtOptions = {
      ajax: 'http://laravel.test/api/json',
      columns: [{
        title: 'ID',
        data: 'id'
        }, {
        title: 'Имя',
        data: 'firstnameKg'
        }, {
        title: 'Фамилия',
        data: 'lastnameKg'
        }, {
          title: 'email',
          data: 'email'
        }, {
          title: 'Логин',
          data: 'login'
        }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }
}
