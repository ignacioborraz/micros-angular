import { Component, OnInit } from '@angular/core';
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
export class TableboardsComponent implements OnInit {
  boards: Array<Board> = [];

  constructor(private route: ActivatedRoute, private service: BoardsService) {}

  ngOnInit(): void {
    this.service.readAll().subscribe(
      (response) => (this.boards = response.response),
      (error) => alert(error.error.message)
    );
  }
}

/*   ngOnInit(): void {
    this.route.queryParamMap.subscribe((queries) => {
      this.onsale = queries.get('onsale') === 'true' ? true : false;
      this.price = queries.get('price') || 'asc';
    });
    console.log('ONSALE: ' + this.onsale);
    console.log('PRICE: ' + this.price);
    this.filteredProducts = this.service.readAll(this.onsale, this.price, '');
    console.log(this.filteredProducts);
  } */
