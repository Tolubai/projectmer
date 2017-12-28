import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

import { UserService } from '../../shared/user/user.service';
import { Users } from '../../shared/user/user';

@Component({
  selector: 'profile-app',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Users;
  sub: Subscription;
  errorMessage = '';

  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {

    // Get user
    this.sub = this.route.params.subscribe(params => {
      let userID = +params['id'];
      this.UserService.getUser(userID).subscribe(user => {
        this.user = user;
        this.title.setTitle(this.user.login);
      }, error => this.errorMessage = 'Could not load item comments.');
    });
  }

}
