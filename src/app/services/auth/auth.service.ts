import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private AUTH_URL = "https://task-tracker-backend-side.herokuapp.com/api/auth";
  private AUTH_URL = "http://192.168.147.125:3000/api/auth";

  constructor(private _http: HttpClient) { }

  login(user: any): Observable<any> {
    return this._http.post<any>(`${this.AUTH_URL}/login`, user);
  }

  singUp(user: any): Observable<any> {
    return this._http.post<any>(`${this.AUTH_URL}/signup`, user);
  }

  me(): Observable<any> {
    return this._http.get<any>(`${this.AUTH_URL}/me`);
  }

  isAdmin() {
    return true;
  }
}
