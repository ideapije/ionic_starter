import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFirstPage } from './login-first.page';

const routes: Routes = [
  {
    path: '',
    component: LoginFirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginFirstPageRoutingModule {}
