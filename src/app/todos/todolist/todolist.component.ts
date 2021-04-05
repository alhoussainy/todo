import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  public todolist: Todo[];
  public erreur: boolean;
  public index;
  public disable: boolean;
  constructor(private todoService: TodoService) {
    this.disable = false;
    this.getError();
  }


  getError(): void {

    this.todoService.get().subscribe(
      (todolist: Todo[]) => {
        this.erreur = false;
        this.todolist = this.todoService.todolist = todolist;
      },
      () => {
        this.erreur = true;
      }
    );

  }

  onDelete(todo: Todo, index: number) {

    this.index = index;
    this.disable = true;
    console.log(this.index);
    this.todoService.delete(todo).subscribe(
      () => {

        this.index = null;
        this.disable = false;
      },
      () => { }
    );
  }

}
