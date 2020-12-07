import { Component, OnInit } from '@angular/core';

import { Todo } from '../todolist/shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent  {

    public todo= Todo;
  constructor(
    
   ) {
    
   }
   clickSave(nom:string, desc:string){

    const todo= new Todo()
    todo.name= nom;
    todo.description=desc

    console.log(todo)
   }
  

}
