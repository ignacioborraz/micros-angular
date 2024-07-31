import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Board } from '../../interfaces/board';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'new-board',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-board.component.html',
})
export class NewboardComponent {
  board: Board = {
    name: '',
    description: '',
  };
  constructor(private service: BoardsService) {}

  create = (): void => {
    this.service.create(this.board).subscribe(
      (response) => {
        alert(response.message);
        this.board = { name: '', description: '' };
      },
      (error) => alert(error.error.message)
    );
  };
}
