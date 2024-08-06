// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStore } from './store/auth.store';

@Component({
  selector: 'auth',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  providers: [AuthStore],
})
export class AppComponent {}
