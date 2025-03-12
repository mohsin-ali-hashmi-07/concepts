import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    // Remove the token from localStorage to log out
    localStorage.removeItem('authToken');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
