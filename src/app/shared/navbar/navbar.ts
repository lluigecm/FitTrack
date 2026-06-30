import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isLoggedIn = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
      });
  }

  logout() {
    sessionStorage.removeItem('loggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
