import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  viewProviders: [Title], 
  styleUrls: ['./../../bashkaruu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  user: User = new User();
  error = '';
  constructor(private router: Router, private auth: AuthService, title: Title) {  
    title.setTitle('Авторизация');
  }
  onLogin(): void {
    this.auth.login(this.user)
      .then((user) => {
        localStorage.setItem('token', user.json().token);
        localStorage.setItem('message', user.json().message);
        console.log(user);
        this.router.navigateByUrl('/bashkaruu/status');
      })
      .catch((err) => {
        this.error = err.json().message;
      });
  }
}
