import { Todo } from "./interfaces";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
  apiUrl: string = "http://localhost:8080/";

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Array<Todo>>(this.apiUrl + "todos");
  }

  getTodo(id): Observable<Todo> {
    return this.http.get<Todo>(this.apiUrl + "todo/" + id);
  }

  doneTodo(id) {
    return this.http.put<Todo>(this.apiUrl + "done/" + id, null);
  }

  addTodo(todo: Todo) {
    return this.http.post(this.apiUrl + "add", todo);
  }
}
