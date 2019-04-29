import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { TodoModel } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoModel[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {

    this.todoListService.getTodoList().subscribe(res => {
      this.todoList = res;
    })

  }

  deliteTodo(id: number) {
    this.todoListService.deliteTodo(id).subscribe(res => {
      alert('Delited!');
    });
    this.todoListService.getTodoList().subscribe(res => {
      this.todoList = res;
    })
  }
}