import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { BehaviorSubject, map } from 'rxjs';
import { SingleToDo } from '../../types';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-to-do-stats',
  imports: [AsyncPipe],
  templateUrl: './to-do-stats.component.html',
  styleUrl: './to-do-stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoStatsComponent {
  private todoService = inject(TodoService);
  private _todosSubject = new BehaviorSubject<SingleToDo[]>([]);
  public todosSubject = this._todosSubject.asObservable();
  // amountOfTodos = computed(() => this.todoService.todos().length);
  // amountOfNewTodos = computed(
  //   () =>
  //     this.todoService.todos().filter((todo) => todo.status === 'new').length
  // );
  // amountOfFinishedTodos = computed(
  //   () =>
  //     this.todoService.todos().filter((todo) => todo.status === 'finished')
  //       .length
  // );

  amountOfTodos = this.todoService.todosSubject.pipe(
    map((todos) => todos.length)
  );
  amountOfNewTodos = this.todoService.todosSubject.pipe(
    map((todos) => todos.filter((todo) => todo.status === 'new').length)
  );
  amountOfFinishedTodos = this.todoService.todosSubject.pipe(
    map((todos) => todos.filter((todo) => todo.status === 'finished').length)
  );
}
