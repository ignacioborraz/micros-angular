import { Component, Input } from '@angular/core';

@Component({
  selector: 'board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  @Input() id = ''
  @Input() name = ''
  @Input() description= ''
}
