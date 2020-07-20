import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { APP_CONFIG, AppConfig } from './../app-config/app-config.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  getAll() {
    return this.http.get<User[]>(`${this.config.apiUrl}/users/`);
  }

  register(user: User) {
    return this.http.post(`${this.config.apiUrl}/users/saveUserDetails/`, user);
  }
    
}
