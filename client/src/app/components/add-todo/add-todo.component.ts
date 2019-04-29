import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { TodoModel } from '../../models/todo.model';
import { FamilyMemberModel } from '../../models/family-member.model';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo: TodoModel;
  family: FamilyMemberModel[];

  constructor(private todoListService: TodoListService,
    private familyService: FamilyService) {

    this.todo = <TodoModel>{};
    this.family = <FamilyMemberModel[]>[];
  }

  ngOnInit() {
    this.familyService.getFamily().subscribe(res => {
      this.family = res;
      console.log(this.family);
    })
  }

  addTodo() {
    this.addDate();
    console.log(this.todo);
    this.todoListService.addTodo(this.todo).subscribe(successRes => {
      alert('added!');
      this.todo.description = '';
    }, errorRes => {
      console.log(errorRes);
      alert('failed');
    });
  }

  addDate(){
    this.todo.date = new Date();
  }

}
