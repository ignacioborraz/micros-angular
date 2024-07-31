import { Component, Input } from '@angular/core';

@Component({
  selector: 'list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() id = ''
  @Input() name = ''
  @Input() description= ''
}
