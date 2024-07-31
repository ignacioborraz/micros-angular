import { Component, OnInit, effect } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BoardsService } from '../../services/boards.service';
import { NewboardComponent } from '../../components/new-board/new-board.component';
import { Board } from '../../interfaces/board';
import { BoardComponent } from '../../components/board/board.component';

@Component({
  selector: 'tableboards',
  standalone: true,
  imports: [CommonModule, RouterModule, NewboardComponent, BoardComponent],
  templateUrl: './tableboards.component.html',
})
export class TableboardsComponent {
  boards: Array<Board> = [];
  reaload = this.service.getReload();
  constructor(private route: ActivatedRoute, private service: BoardsService) {
    effect(() => {
      this.reaload();
      this.service.readAll().subscribe(
        (response) => (this.boards = response.response),
        (error) => alert(error.error.message)
      );
    });
  }
}
