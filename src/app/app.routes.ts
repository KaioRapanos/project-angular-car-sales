import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module')
                .then(m => m.DashboardModule)
  }
];
