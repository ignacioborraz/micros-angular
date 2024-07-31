import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':bid',
    loadComponent: () =>
      import('./views/lists/lists.component').then(
        (res) => res.ListsComponent
      ),
  },
];
