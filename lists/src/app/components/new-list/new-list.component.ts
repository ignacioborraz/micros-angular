import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { List } from '../../interfaces/list';
import { ListsService } from '../../services/lists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-list.component.html',
})
export class NewlistComponent implements OnInit {
  list: List = {
    name: '',
    board_id: '',
  };

  constructor(private route: ActivatedRoute, private service: ListsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.list.board_id = params.get('bid') || '';
    });
  }

  create = (): void => {
    //console.log(this.list);
    this.service.create(this.list).subscribe(
      (response) => {
        alert(response.message);
        this.list.name = '';
        this.service.setReload();
      },
      (error) => alert(error.error.message)
    );
  };
}
