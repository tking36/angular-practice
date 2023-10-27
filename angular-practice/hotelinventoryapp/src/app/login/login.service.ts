import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor() {}

    login(email: String, password: String) {
      if(email === "admin@gmail.com" && password === "Admin") {
        return this.isLoggedIn = true
      }
      return this.isLoggedIn
    }
   
}
