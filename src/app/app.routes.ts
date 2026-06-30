import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Treinos } from './pages/treinos/treinos';
import { TreinoDetalhe } from './pages/treino-detalhe/treino-detalhe';
import { Exercicios } from './pages/exercicios/exercicios';
import { TreinoForm } from './pages/treino-form/treino-form';


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'treinos', component: Treinos },
    { path: 'treinos/novo', component: TreinoForm },
    { path: 'treinos/:id', component: TreinoDetalhe },
    { path: 'exercicios', component: Exercicios }

];
