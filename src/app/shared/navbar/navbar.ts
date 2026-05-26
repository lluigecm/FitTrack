import { Component } from '@angular/core';
import { Router, RouterLink, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isLoggedIn = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
      });
  }

  logout() {
    sessionStorage.removeItem('loggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}