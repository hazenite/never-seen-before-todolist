import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NewToDoComponent } from './components/new-to-do/new-to-do.component';

@Component({
  selector: 'app-root',
  imports: [ToDoListComponent, NewToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'never-seen-before-todolist';
}
