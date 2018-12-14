import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('http://localhost:3000/api/user_route');
  }

  getUserDetails(userId) {
    return this.http.get('http://localhost:3000/api/user_route/' + userId);
  }
}
