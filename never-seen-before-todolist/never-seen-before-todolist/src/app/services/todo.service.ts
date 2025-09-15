import { Injectable, signal } from '@angular/core';
import { SingleToDo } from '../types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos = signal<SingleToDo[]>([]);
  public todos = this._todos.asReadonly();
  public _todoSubject = new BehaviorSubject<SingleToDo[]>([]);

  public todosSubject = this._todoSubject.asObservable();

  addNewTodo(title: string) {
    // this._todos.update((prevTodos) => [
    //   ...prevTodos,
    //   {
    //     title,
    //     status: 'new',
    //     id: new Date().getTime(),
    //   },
    // ]);

    const currentTodos = this._todoSubject.getValue();
    this._todoSubject.next([
      ...currentTodos,
      {
        title,
        status: 'new',
        id: new Date().getTime(),
      },
    ]);
  }

  closeTodo(id: number) {
    // this._todos.update((prevTodos) =>
    //   prevTodos.map((todo) => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         status: 'finished',
    //       };
    //     }
    //     return todo;
    //   })
    // );

    const currentTodos = this._todoSubject.getValue();
    this._todoSubject.next(
      currentTodos.map((todo) => {
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
