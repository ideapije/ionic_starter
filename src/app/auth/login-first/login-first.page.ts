import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleService } from 'src/app/services/google.service';

@Component({
  selector: 'app-login-first',
  templateUrl: './login-first.page.html',
  styleUrls: ['./login-first.page.scss'],
})
export class LoginFirstPage implements OnInit {

  fotoAnda = 'assets/imgs/take-pic.svg'; // use Base64 to convert image to string
  emailAnda = '';
  addressAnda = '';
  isEmailSave = false;
  lokasiAnda: { lat: string | number; lng: string | number } = {
    lat: -6.91746,
    lng: 107.61912
  };

  constructor(
    private auth: AuthService,
    private googleAPI: GoogleService,
    private geoloc:  Geolocation,
    private camera: Camera,
    private router: Router,
    private load: LoadingController,
  ) { }

  initGeolocation() {
    this.geoloc.getCurrentPosition().then((resp) => {
      console.log(resp);
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      const req = this.googleAPI.getAddress(lat, lng).subscribe((response) => {
        if (response.status === 'OK') {
          this.addressAnda = response.results[0].formatted_address;
          req.unsubscribe();
        } else {
          this.addressAnda = lat + '; ' + lng;
        }
      });
    }).catch((error) => {
      console.log('Error getting location', error);
      this.addressAnda = 'Error getting location';
    });
  }

  checkBoxEvent(event) {
    this.isEmailSave = event?.detail?.checked;
  }

  cameraButton() {
    this.camera.getPicture({
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }).then((imageData) => {
      this.fotoAnda = 'data:image/jpeg;base64,' + imageData;
    }).catch((err) => {
      console.log(err);
    });
  }

  login() {
    if (this.emailAnda !== '') {
      this.load.create({
        spinner: 'crescent',
        message: 'Please wait...',
        duration: 5000,
      }).then((loading) => {
        loading.present();
        const pLogin = this.auth.login(this.emailAnda, {
          foto: this.fotoAnda,
          lokasi: this.lokasiAnda
        }).subscribe((response) => {
          console.log(response);
          pLogin.unsubscribe();

          if (this.isEmailSave) {
            this.auth.saveEmail(this.emailAnda);
          }

          setTimeout(() => {
            this.router.navigate(['login-otp']);
            loading.dismiss();
          }, 2000);
        });
      });

      // You can use upload image from file with auth service upload file
      // const pUpload = this.auth.uploadFile(this.fotoAnda).subscribe((response) => {
      //   console.log(response);
      //   pUpload.unsubscribe();
      // });
    }
  }

  ngOnInit() {
    this.initGeolocation();
  }

}
