import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './views/empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/login-view/login-view.component').then(
        (res) => res.LoginViewComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./views/register-view/register-view.component').then(
        (res) => res.RegisterViewComponent
      ),
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];
