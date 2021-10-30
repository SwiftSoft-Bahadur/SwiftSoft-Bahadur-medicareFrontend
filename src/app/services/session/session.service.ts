import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  getUser() {
    let user = localStorage.getItem('token');
    if (user) {
      return JSON.parse(user);
    }
  }

  setUser(user: any) {
    localStorage.setItem('token', JSON.stringify(user));
  }

  deleteUser() {
    localStorage.removeItem('token');
  }
}
