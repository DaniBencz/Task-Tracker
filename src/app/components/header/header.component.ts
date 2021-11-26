import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask = false;
  subscription = this.uiService.toggled.subscribe();

  // add service to constructor to be able to use it
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.toggled
      .subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void { }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }
}
