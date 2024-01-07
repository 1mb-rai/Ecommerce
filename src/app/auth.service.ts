import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userLogin(payload: any) {
    return this.http.post('https://fakestoreapi.com/auth/login', { username: payload.email, password: payload.password });
  }

  userSignup(data: any) {
    const payload = data;
    data.name = { firstname: data.fullname.split(' ')[0], lastname: data.fullname.split(' ')[1] };
    data.address.geolocation = {
      lat: '-37.3159',
      long: '81.1496'
    }
    delete data.fullname;
    return this.http.post('https://fakestoreapi.com/users', JSON.stringify(payload));
  }
}
