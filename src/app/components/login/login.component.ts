import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  handleLogin() {

    localStorage.setItem('authToken', 'fake-auth-token');
    this.router.navigate(['/home']);
  }
}
