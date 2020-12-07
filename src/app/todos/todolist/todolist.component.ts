import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {

  public todolist: Todo[]=[];
  
  public foo:[
    1,2,2,3
  ]
  constructor() {

    // let todo1 = new Todo();
    // todo1.name= "voiture"
    // todo1.description
    // const todo2 = new Todo();

    // this.todolist = [];
    this.todolist.push({
      name :"achat",
      description :" pain, orange,mangue"
    } ,
    {
      name: "revision",
       description:"javaScript, java,html,css"
    }, 
    {
      name: "voiture",
       description:"peugeot, citroen,"
    }, 
    {
      name: "revision",
       description:"javaScript, java,html,css"
    } 
    
    )
  }
   myOndelete( todo: Todo    ){
      
    const index= this.todolist.indexOf(todo)

    this.todolist.splice(index,1)
    
   }

   }
  


