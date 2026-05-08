import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Treinos } from './pages/treinos/treinos';
import { Exercicios } from './pages/exercicios/exercicios';
import { TreinoForm } from './pages/treino-form/treino-form';


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'treinos', component: Treinos },
    { path: 'treinos/novo', component: TreinoForm },
    { path: 'exercicios', component: Exercicios }

];
