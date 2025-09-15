import { Injectable, signal } from '@angular/core';
import { SingleToDo } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos = signal<SingleToDo[]>([]);
  public todos = this._todos.asReadonly();

  addNewTodo(title: string) {
    this._todos.update((prevTodos) => [
      ...prevTodos,
      {
        title,
        status: 'new',
        id: new Date().getTime(),
      },
    ]);
  }

  closeTodo(id: number) {
    this._todos.update((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: 'finished',
          };
        }
        return todo;
      })
    );
  }
}
