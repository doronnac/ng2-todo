import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="titles"
        (keyup.enter)="changeTitle($event.target.value)"
        #myInput>
<button (click)="changeTitle(myInput.value)">
Save
</button>
{{ title }}
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit:EventEmitter<string> = new EventEmitter();
  private title: string = 'my title';

  constructor() {
    this.title = 'Hello World';
    this.changeTitle('I love Angular');
  }

  changeTitle(newTitle:string):void {
  this.submit.emit(newTitle);
}

  ngOnInit() {
  }

}
