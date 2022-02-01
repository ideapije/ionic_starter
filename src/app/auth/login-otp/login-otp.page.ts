import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.page.html',
  styleUrls: ['./login-otp.page.scss'],
})
export class LoginOtpPage implements OnInit {

  kodeOTPShow = '****';
  kodeOTP = '';

  constructor(
    private router: Router
  ) { }

  inputKodeOTP(event: any) {
    const data: string = event?.target?.value;
    if (typeof data !== 'undefined') {
      const defaultString = '****';
      if (data.length <= 4) {
        this.kodeOTPShow = defaultString.substring(0, (defaultString.length - data.length)) + data;
      } else {
        this.kodeOTP = data.substring(0, 4);
      }
    }
  }

  verifyOTP() {
    console.log('verifyOTP');
    this.router.navigate(['tabs', 'tab1'], { replaceUrl: true });
  }

  ngOnInit() {
  }

}
