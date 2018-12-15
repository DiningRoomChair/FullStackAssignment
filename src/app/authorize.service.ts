import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface MyData {
  success: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  loggedInStatus = false;

  constructor( private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  getIsLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(email, password) {
    return this.http.post<MyData>('http://localhost:3000/api/admin_route', {
      email,
      password
    });

  }
}
