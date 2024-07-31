import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {}
