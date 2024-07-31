import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink],
  //template: '<router-outlet />',
  templateUrl: './app.component.html',
})
export class AppComponent {}
