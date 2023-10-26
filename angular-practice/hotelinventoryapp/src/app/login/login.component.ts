import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = ''
  password: string = ''

  constructor(private route: Router) {}

  ngOnInit(): void {
  }

  Login() {
    if(this.email === "admin@gmail.com" && this.password === "Admin") {
      this.route.navigate(['/rooms/add'])
    }
  }

}
