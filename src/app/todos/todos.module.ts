import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodosComponent } from './todos.component';



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodolistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TodosComponent
  ]
})
export class TodosModule { }
