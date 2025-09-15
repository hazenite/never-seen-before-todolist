import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToDoElementComponent } from '../to-do-element/to-do-element.component';

@Component({
  selector: 'app-to-do-list',
  imports: [ToDoListComponent, ToDoElementComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent {
  private todoService = inject(TodoService);
  todos = this.todoService.todos;
}
