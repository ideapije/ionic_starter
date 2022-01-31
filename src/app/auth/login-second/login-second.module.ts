import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSecondPageRoutingModule } from './login-second-routing.module';

import { LoginSecondPage } from './login-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSecondPageRoutingModule
  ],
  declarations: [LoginSecondPage]
})
export class LoginSecondPageModule {}
