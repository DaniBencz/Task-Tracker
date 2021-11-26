import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // services must be provided to the constructor
  constructor(private taskService: TaskService) { }

  // service used in the lifecycle method
  ngOnInit(): void {
    this.taskService.getTasks()
      // subscribing to the observable
      .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        // removing deleted element from the UI
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      });
  }

  toggleReminder(task: Task): void {
    // effects UI element, but not DB
    task.reminder = !task.reminder;

    // update DB via the API
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
