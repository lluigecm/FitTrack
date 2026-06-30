import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Treinos } from './pages/treinos/treinos';
import { TreinoDetalhe } from './pages/treino-detalhe/treino-detalhe';
import { Exercicios } from './pages/exercicios/exercicios';
import { TreinoForm } from './pages/treino-form/treino-form';
import { authGuard } from './services/auth.guard';


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
    { path: 'treinos', component: Treinos, canActivate: [authGuard] },
    { path: 'treinos/novo', component: TreinoForm, canActivate: [authGuard] },
    { path: 'treinos/:id', component: TreinoDetalhe, canActivate: [authGuard] },
    { path: 'exercicios', component: Exercicios, canActivate: [authGuard] }

];
