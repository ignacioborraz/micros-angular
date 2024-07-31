import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':lid',
    loadComponent: () =>
      import('./views/tableboards/tableboards.component').then(
        (res) => res.TableboardsComponent
      ),
  },
];
