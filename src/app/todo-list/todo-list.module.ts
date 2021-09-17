import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule }       from "@angular/forms";



@NgModule({
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class TodoListModule { }
