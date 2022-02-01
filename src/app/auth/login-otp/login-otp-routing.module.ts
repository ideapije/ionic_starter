import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOtpPage } from './login-otp.page';

const routes: Routes = [
  {
    path: '',
    component: LoginOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginOtpPageRoutingModule {}
