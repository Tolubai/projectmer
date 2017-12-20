import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { Headers, Http } from '@angular/http';

@Component({
  moduleId: module.id,
  templateUrl: './status.component.html',
  styleUrls: ['./../../bashkaruu.component.scss']
})
export class StatusComponent implements OnInit {
  user:any;
  isLoggedIn: boolean = false;
  constructor(
    private router: Router, 
    private auth: AuthService,
    private http: Http
  ) { 
  }
  ngOnInit(): void {

    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token)
        .then((user) => {
          if (user.json().status === 'success') {
            this.isLoggedIn = true;
            this.user = user.json().data.firstname + ' ' + user.json().data.lastname;
          }
        })
        .catch((err) => {
          console.log(err.json().message);
        });
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('message');
    this.router.navigateByUrl('/bashkaruu/login');
    console.log('chykty');
  }

  public ping() {
    this.http.get('http://laravel.test/api/status')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
