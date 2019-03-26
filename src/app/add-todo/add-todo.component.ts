import { ApiService } from "../api.service";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent {
  service: ApiService;
  @Output() added = new EventEmitter();
  form = new FormGroup({
    todo: new FormControl("", Validators.required)
  });
  constructor(service: ApiService) {
    this.service = service;
  }
  add() {
    let value = this.form.get("todo").value;
    console.log(`Adding ${value}`);
    this.service.addTodo({ text: value }).subscribe(res => {
      this.form.patchValue({ todo: "" });
      this.added.emit();
    });
  }
}
