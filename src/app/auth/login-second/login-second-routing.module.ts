import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSecondPage } from './login-second.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSecondPageRoutingModule {}
