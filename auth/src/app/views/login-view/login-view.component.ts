import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login-view.component.html',
})
export class LoginViewComponent {
  user: User = {
    email: '',
    password: '',
  };

  constructor(private service: UsersService) {}

  login = (): void => {
    this.service.login(this.user).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        alert(response.message);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  };
}
