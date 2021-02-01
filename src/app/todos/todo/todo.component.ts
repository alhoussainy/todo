import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})

export class TodoComponent implements OnInit {

  public todo: Todo;
  public disable: boolean;
  public formTodo: FormGroup;

  constructor(private todoService: TodoService, public fromBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.disable = false;
    this.todoService.get().subscribe(
      (data: Todo[]) => {
        data.forEach((elem) => {
          this.todoService.todolist.push(elem);
        });
      },
      () => {
        console.log('erreur');
      }
    );
    this.formTodo = this.fromBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required]
      }
    );
  }

  Save() {
    this.disable = true;
    const todo = new Todo();

    todo.name = this.formTodo.get('name').value;
    todo.description = this.formTodo.get('description').value;
    this.todoService.post(
      todo
    ).subscribe(
      () => {
        this.route.navigate(['/list']);
      },
      () => { }
    );
  }

  // id: null,
  // name: this.formTodo.get('name').value,
  // description: this.formTodo.get('description').value

}

