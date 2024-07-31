import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/tableboards/tableboards.component').then(
        (res) => res.TableboardsComponent
      ),
  },
];
