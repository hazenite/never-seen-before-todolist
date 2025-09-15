import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToDoElementComponent } from '../to-do-element/to-do-element.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  imports: [ToDoElementComponent, AsyncPipe],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent {
  private todoService = inject(TodoService);
  todos = this.todoService.todos;
  todosSubject = this.todoService._todoSubject;
}
