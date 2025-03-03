import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { TodoItemsComponent } from "../components/todo-items/todo-items.component";
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [TodoItemsComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {
      this.todoService.getTodosFromApi()
        .pipe(
          catchError((error) => {
            console.log(error);
            throw error;
          })
        ).subscribe((todos) => {
          this.todoItems.set(todos);
        })
  }

}
