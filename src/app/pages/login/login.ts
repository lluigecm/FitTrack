import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin' && this.senha === 'admin') {
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.erro = 'E-mail ou senha inválidos.';
    }
  }
}