import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { ApiService } from "./api.service";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { TodoComponent } from "./todos/todo/todo.component";

import { MaterialModule } from "./material.module";

import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    LoginComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: "toast-bottom-center",
      preventDuplicates: true
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
