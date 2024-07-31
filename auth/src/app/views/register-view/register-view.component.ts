import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-view.component.html',
})
export class RegisterViewComponent {
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
