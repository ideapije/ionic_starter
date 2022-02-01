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
    return this.http.post(this.apiURL + 'save.json', { email, data });
  }

  verify(email: string, code: string): Observable<any> {
    return this.http.post(this.apiURL + 'verify.json', { email, code });
  }


}
