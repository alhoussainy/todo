import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  public todolist: Todo[];
  public erreur: boolean;
  constructor(private todoService: TodoService) {
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

  onDelete(todo: Todo) {

    this.todoService.delete(todo);
  }

}
