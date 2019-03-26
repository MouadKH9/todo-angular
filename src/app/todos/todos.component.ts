import { Component, EventEmitter, Output } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent {
  todos: any;
  @Output() refresh = new EventEmitter();
  service: ApiService;
  constructor(service: ApiService) {
    this.service = service;
    this.Refresh();
  }
  Refresh() {
    console.log("Refreshing...");
    this.service.getTodos().subscribe(data => (this.todos = data));
  }
  todoDone(id: number) {
    console.log("Done..");
    this.service.doneTodo(id).subscribe(res => {
      this.refresh.emit(res);
    });
  }
}
