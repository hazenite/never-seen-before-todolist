import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { SingleToDo } from '../../types';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-element',
  imports: [],
  templateUrl: './to-do-element.component.html',
  styleUrl: './to-do-element.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoElementComponent {
  @Input()
  todo!: SingleToDo;

  private todoService = inject(TodoService);
  closeTodo() {
    this.todoService.closeTodo(this.todo.id);
  }
}
