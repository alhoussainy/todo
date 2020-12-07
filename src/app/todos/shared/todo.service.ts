import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todolist: Todo[] = [];
  public erreur: boolean;

  /**
   *
   * @param http;
   *
   */
  constructor(private http: HttpClient) {

  }
  /**
   *  on defint que notre get revoie un observable de type Todo
   * @returns Observable
   */
  get(): Observable<Todo[]> {

    const options = {
      headers: new HttpHeaders({
        'secret-key': environment.jsonbin.key
      })
    };
    return this.http.get<Todo[]>(environment.jsonbin.url, options);
  }

  post(todo: Todo) {
    const mytab = [];
    this.todolist.forEach((item) => {
      mytab.push(item);
    });
    mytab.push(todo);
    this.put(mytab).subscribe(
      () => {
        this.todolist.push(todo);
      },
      () => { }
    );
  }
  /**
   *
   * @param todo;
   */
  delete(todo: Todo) {
    const newtab = [];
    this.todolist.forEach((items) => {
      if (items !== todo) {
        newtab.push(items);
      }
    });
    this.put(newtab).subscribe(
      () => {
        const index = this.todolist.indexOf(todo);
        this.todolist.splice(index, 1);
      },
      () => { }
    );

  }
  /**
   *
   * @param todolist;
   */
  put(todolist: Todo[]): Observable<Todo[]> {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'secret-key': environment.jsonbin.key,
        'versioning': 'false'
      })
    };
    return this.http.put<Todo[]>(environment.jsonbin.url, todolist, options);
  }

}
