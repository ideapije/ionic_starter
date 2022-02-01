/* eslint-disable max-len */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  private geocodingURL = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor(
    private http: HttpClient,
  ) { }

  // get the address from the coordinates
  public getAddress(lat: number, lng: number): Observable<any> {
    const params = new HttpParams()
      .set('latlng', `${lat},${lng}`)
      .set('key', environment.googleAPIKey);
    return this.http.get(this.geocodingURL, { params });
  }

  // get the coordinates from the address
  public getGeocoding(address: string): Observable<any> {
    const params = new HttpParams()
      .set('address', address)
      .set('key', environment.googleAPIKey);
    return this.http.get(this.geocodingURL, { params });
  }
}
