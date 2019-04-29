import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoModel } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @Output() deliteTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delite() {
    this.deliteTodo.emit(this.todo.id);
    //  TODO:   Refresh the screen after deleting
  }
}