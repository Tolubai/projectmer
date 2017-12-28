import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Profile components
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';

import { UserService } from '../../shared/user/user.service';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [
    UserService
  ]
})

export class ProfileModule { }
