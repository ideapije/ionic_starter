import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = '';

  constructor(
    private http: HttpClient,
  ) {
    this.apiURL = environment.apiURL;
  }

  login(email: string, data: any): Observable<any> {
    // UnComment for use post
    // return this.http.post(this.apiURL + 'save.json', { email, data });
    // unComment for use get
    return this.http.get(this.apiURL + 'save.json?email=' + email + '&data=' + JSON.stringify(data));
  }

  verify(email: string, code: string): Observable<any> {
    // UnComment for use post
    // return this.http.post(this.apiURL + 'verify.json', { email, code });
    // unComment for use get
    return this.http.get(this.apiURL + 'verify.json?email=' + email + '&code=' + code);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiURL + 'upload.json', formData);
  }

  // save email to localstorage
  saveEmail(email: string) {
    localStorage.setItem('email', email);
  }



}
