import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent {
  editMode: boolean = false;
  editVal: string;

  @Input() id: number;
  @Input() text: string;
  @Input() done: boolean;

  service: ApiService;
  toastr: ToastrService;

  @Output() clicked = new EventEmitter();
  @Output() refresh = new EventEmitter();

  constructor(service: ApiService, toastr: ToastrService) {
    this.service = service;
    this.toastr = toastr;
  }

  enterEditMode(val: string) {
    this.editMode = true;
    this.editVal = val;
  }

  confirmEdit(id) {
    this.service.editTodo(id, this.editVal).subscribe(res => {
      this.refresh.emit();
      this.toastr.success("Todo edited successfully!");
    });
  }
  delete(id) {
    this.service.deleteTodo(id).subscribe(res => {
      this.refresh.emit();
      this.toastr.success("Todo deleted successfully!");
    });
  }
}
