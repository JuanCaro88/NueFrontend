import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndPointServer } from '../global.config';

@Injectable({
  providedIn: 'root'
})
export class CountrieService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  public getCountries() {
    return this.http.get(`${EndPointServer}/api/countrie/`, this.httpOptions)
  }
}
