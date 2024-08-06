import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login-view.component.html',
})
export class LoginViewComponent {
  readonly store = inject(AuthStore);

  user: User = {
    email: '',
    password: '',
  };

  constructor(private service: UsersService) {
    this.user = this.store.user();
  }

  login = (): void => {
    this.service.login(this.user).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        alert(response.message);
        location.replace('/boards');
      },
      (error) => {
        alert(error.error.message);
      }
    );
  };
}
