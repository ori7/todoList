import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  ENDPOINT:string = 'todoList';

  constructor(private httpClient: HttpClient) { }

  addTodo(todo: TodoModel): Observable<object> {
  
    return this.httpClient.post<object>(environment.serverUrl + this.ENDPOINT, todo);
  };

  getTodoList():Observable<TodoModel[]> {

    return this.httpClient.get<TodoModel[]>(environment.serverUrl + this.ENDPOINT);
  }

  deliteTodo(id: number): Observable<object> {
    
    return this.httpClient.delete(environment.serverUrl + this.ENDPOINT + '/' + id);
  }
}