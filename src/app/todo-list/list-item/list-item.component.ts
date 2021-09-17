import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCheck($event: Event, listItem: Todo) {
    listItem.done = !listItem.done;
  }


}

interface Todo {
  description: string,
  done: boolean,
}
