import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-view.component.html',
})
export class RegisterViewComponent {
  readonly store = inject(AuthStore);

  constructor(private service: UsersService) {}
  newUser: User = {
    name: '',
    email: '',
    password: '',
    age: 12,
    avatar: '',
    role: 'USER',
  };
  register = (): void => {
    this.service.register(this.newUser).subscribe(
      (response) => {
        //console.log('Respuesta del servidor:', response);
        alert(response.message);
        this.store.setUser(this.newUser);
        this.newUser = {
          name: '',
          email: '',
          password: '',
          age: 12,
          avatar: '',
          role: 'USER',
        };
      },
      (error) => {
        //console.error('Error en la solicitud:', error);
        alert(error.error.message);
      }
    );
  };
}
