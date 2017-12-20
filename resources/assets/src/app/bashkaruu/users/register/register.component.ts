import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../../bashkaruu.component.scss']
})
export class RegisterComponent {
  user: User = new User();
  constructor(
    private router: Router, 
    private auth: AuthService
  ) { }
  onRegister(): void {
    this.auth.register(this.user)
      .then((user) => {
        localStorage.setItem('token', user.json().token);
        this.router.navigateByUrl('/bashkaruu/status');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
