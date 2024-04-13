import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';



@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent,CommonModule,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno:1,
        title:"This is 1",
        desc:"Hello",
        active:true
      },
      {
        sno:2,
        title:"This is 2",
        desc:"Hello1",
        active:true
      },
      {
        sno:3,
        title:"This is 3",
        desc:"Hello2",
        active:true
      },
    ];
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }

}
