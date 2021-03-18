import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseResponse } from '../interfaces/baseResponse';
import { api_url } from '../../api.json';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<baseResponse> {
    return this._http.get<baseResponse>(api_url + "category/getAll")
  }

  getPds(id: number): Observable<baseResponse> {
    return this._http.get<baseResponse>(api_url + "category/getPds/" + id)
  }
}
