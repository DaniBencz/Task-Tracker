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
    this.tasks = this.taskService.getTasks();
  }
}
