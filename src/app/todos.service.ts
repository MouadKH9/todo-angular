import { Todo } from "./interfaces";
export class TodosService {
  todos: Array<Todo> = [
    {
      id: 1,
      text: "Learn Angular"
    },
    {
      id: 2,
      text: "Learn Ionic"
    }
  ];

  getTodos() {
    return this.todos;
  }

  getTodo(id) {
    return this.todos.filter(todo => todo.id == id)[0];
  }

  doneTodo(id) {
    this.getTodo(id).done = !this.getTodo(id).done;
  }

  getLastId(): number {
    return this.todos[this.todos.length - 1].id;
  }

  addTodo(todo: Todo) {
    todo.id = this.getLastId() + 1;
    this.todos.push(todo);
  }
}
