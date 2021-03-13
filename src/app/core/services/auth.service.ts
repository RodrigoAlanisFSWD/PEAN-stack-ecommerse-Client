import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from '../../api.json';
import { authResponse } from '../interfaces/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  logIn(data: Object): Observable<authResponse> {
    return this._http.post<authResponse>(api_url + '/auth/logIn', data);
  } 
}
