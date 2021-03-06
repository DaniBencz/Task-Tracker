import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask = false;
  subscription = this.uiService.toggled.subscribe();

  // form variables and default values
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.toggled
      .subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    // clear form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
