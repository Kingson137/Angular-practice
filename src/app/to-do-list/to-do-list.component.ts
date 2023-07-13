import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
 
export class ToDoListComponent {

  tasks: Task[] = [
    { title: 'Task 1', completed: true },
    { title: 'Task 2', completed: false },
    { title: 'Task 3', completed: false }
  ];

  getCompleted(): Task[] {
    return this.tasks.filter(task => task.completed);
  }

  getPending(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }

  update(): void {}

}
