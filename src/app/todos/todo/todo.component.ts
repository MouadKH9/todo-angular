import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent {
  @Input() id: number;
  @Input() text: string;
  @Input() done: boolean;

  @Output() clicked = new EventEmitter();
}
