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
    return this._http.post<authResponse>(api_url + 'auth/logIn', data);
  }

  signIn(data: Object): Observable<authResponse> {
    return this._http.post<authResponse>(api_url + 'auth/signIn', data);
  }

  setToken(token: string): void {
    document.cookie = `token=${token}; max-age=${60 * 60 * 60 * 24}`
  }

  verifyToken(): boolean {
    return !!this.readCookie("token")
  }

  readCookie(name: string): any {
    const ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
      if (ca[i].split("=")[0] == name) {
        return ca[i].split("=")[1]
      }
    }

    return null;
  }
}
