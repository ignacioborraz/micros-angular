import { Component, effect, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListsService } from '../../services/lists.service';
import { NewlistComponent } from '../../components/new-list/new-list.component';
import { List } from '../../interfaces/list';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'lists',
  standalone: true,
  imports: [CommonModule, RouterModule, NewlistComponent, ListComponent],
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {
  board_id = '';
  lists: Array<List> = [];
  reload = this.service.getReload();

  constructor(private route: ActivatedRoute, private service: ListsService) {
    effect(() => {
      this.reload();
      this.readAll();
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.board_id = params.get('bid') || '';
    });
  }

  readAll(): void {
    if (this.board_id) {
      this.service.readAll(this.board_id).subscribe(
        (response) => (this.lists = response.response),
        (error) => alert(error.error.message)
      );
    }
  }
}
