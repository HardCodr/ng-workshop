import { Component } from '@angular/core';
import { Todo }      from "./todo-list/list-item/list-item.interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo';

  todoList: Todo[] = [
    {
      description: 'Eat',
      done: false
    },
    {
      description: 'Sleep',
      done: false
    },
    {
      description: 'Drink beer',
      done: false
    },
    {
      description: 'Write code',
      done: false
    }
  ];

  updateList(str: string) {
    debugger;
    this.todoList.push({
      description: str,
      done: false
    })
  }

}

