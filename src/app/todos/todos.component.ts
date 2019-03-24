import { Component, OnInit } from "@angular/core";
import { TodosService } from "../todos.service";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent {
  todos: Array<Object>;
  service: TodosService;
  todoDone(id: Number) {
    this.service.doneTodo(id);
  }
  constructor(service: TodosService) {
    this.service = service;
    this.todos = service.getTodos();
  }
}
