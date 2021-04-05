import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todolist: Todo[] = [];
  public erreur: boolean;
  public create = ''
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

    return this.http.get<Todo[]>(environment.api.url).pipe(
      tap(
        (todolist: Todo[]) => {
          this.todolist = todolist;
        },
        () => { }
      )
    );
  }

  post(todo: Todo): Observable<Todo> {

    return this.http.post<Todo>(environment.api.post, todo).pipe(
      tap(
        () => {
          this.todolist.push(todo);
        },
        () => { }
      )
    );
  }
  /**
   *
   * @param todo;
   */
  delete(todo: Todo): Observable<Todo> {

    return this.http.delete<Todo>(environment.api.url + todo.id).pipe(
      tap(
        () => {
          const index = this.todolist.indexOf(todo);
          this.todolist.splice(index, 1);
          // this.todolist.push(todo);
        },
        () => { }
      )
    );

  }
  /**
   *
   * @param todolist;
   */
  put(todolist: Todo[]): Observable<Todo[]> {
    return this.http.put<Todo[]>(environment.api.url, todolist);
  }

}
