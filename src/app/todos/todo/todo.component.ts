import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public todo: Todo;
  public formTodo: FormGroup;

  constructor(private todoService: TodoService, public fromBuilder: FormBuilder) { }

  ngOnInit() {

    this.formTodo = this.fromBuilder.group(
      {
        nom: ['', Validators.required],
        description: ['', Validators.required]
      }
    );
  }

  Save() {

    return this.todoService.post({

      nom: this.formTodo.get('nom').value,
      description: this.formTodo.get('description').value

    });
  }

}


