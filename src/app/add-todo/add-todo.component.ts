import { TodosService } from "./../todos.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent {
  service: TodosService;
  form = new FormGroup({
    todo: new FormControl("", Validators.required)
  });
  constructor(service: TodosService) {
    this.service = service;
  }
  add() {
    let value = this.form.get("todo").value;
    console.log(`Adding ${value}`);
    this.service.addTodo({ text: value });
  }
}
