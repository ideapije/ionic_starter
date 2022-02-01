import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginOtpPageRoutingModule } from './login-otp-routing.module';

import { LoginOtpPage } from './login-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginOtpPageRoutingModule
  ],
  declarations: [LoginOtpPage]
})
export class LoginOtpPageModule {}
