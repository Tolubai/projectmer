import { NgModule } from '@angular/core';

import { BashkaruuRoutingModule } from './../routing/bashkaruu.module';
import { BashkaruuComponent } from './bashkaruu.component';

import { PagesModule } from './pages/pages.module'

import { AuthService } from './../services/auth.service';
import { EnsureAuthenticated } from './../services/ensure-authenticated.service';
import { LoginRedirect } from './../services/login-redirect.service';
import { PartialsModule } from './partials/partials.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [
    BashkaruuRoutingModule,
    PagesModule,
    PartialsModule,
    ProfileModule
  ],
  declarations: [
    BashkaruuComponent
  ],
  providers:[
    AuthService,
    EnsureAuthenticated,
    LoginRedirect
 ],
 bootstrap:[BashkaruuComponent]
})

export class BashkaruuModule { }