import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginFirstPageRoutingModule } from './login-first-routing.module';

import { LoginFirstPage } from './login-first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginFirstPageRoutingModule
  ],
  declarations: [LoginFirstPage]
})
export class LoginFirstPageModule {}
