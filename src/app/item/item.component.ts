import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
    {{ todoItem.title }}

    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('itemTitle') todoItem: any;

  constructor() {}

  ngOnInit() {
  }

}
