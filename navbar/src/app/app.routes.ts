import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },{
    path: '**',
    component: EmptyRouteComponent,
  }
];
