import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-new-to-do',
  imports: [],
  templateUrl: './new-to-do.component.html',
  styleUrl: './new-to-do.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewToDoComponent {
  private todoService = inject(TodoService);
  addNewTodo() {
    const title = `Lorem Ipsum - ${Math.round(Math.random() * 10000)}`;
    this.todoService.addNewTodo(title);
  }
}
