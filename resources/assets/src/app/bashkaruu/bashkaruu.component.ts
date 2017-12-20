import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-bashkaruu',
  templateUrl: './bashkaruu.component.html',
  styleUrls: ['./bashkaruu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BashkaruuComponent implements OnInit {
  user: string;
  role: string;
  avatar: string;

  constructor(
    private auth: AuthService
  ) { }

  public getScript(url) {
    let node = document.createElement('script');
    node.type = 'text/javascript';
    node.src = url;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token)
      .then((user) => {
        this.user = user.json().data.firstnameKg +' '+ user.json().data.lastnameKg;
        this.role = user.json().data.role;
        this.avatar = user.json().data.avatar;
        console.log(user.json())
        // console.log(this.user)
        // console.log(this.email)
        })
        .catch((err) => {
          // console.log('Kata');
          // console.log(err);
          // console.log(err.status);
          // console.log(err.json().message);
        });
    }
    this.getScript('../dist/assets/bashkaruu/js/main.js');
  }
}
