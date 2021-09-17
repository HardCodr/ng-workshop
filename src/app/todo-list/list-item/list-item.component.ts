import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Todo }                                                      from "./list-item.interfaces";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  newEntry = 'text';
  @Input() data: Todo[] | undefined = [];
  @Output() whenAddNewData: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(event: Event) {
    console.log(event);
  }

  toggleCheck($event: Event, listItem: Todo) {
    listItem.done = !listItem.done;
  }

  addToList(item: string) {
    this.whenAddNewData?.emit(item);
  }


}
