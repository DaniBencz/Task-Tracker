import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // if form shows or not
  private showAddTask = false;

  // 'Subject is a special type of Observable that allows values to be multicasted to many Observers.'
  // 'Subjects are like EventEmitters: they maintain a registry of many listeners.'
  // https://rxjs.dev/guide/subject
  private subject = new Subject<boolean>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;

    // 'To feed a new value to the Subject, just call next(theValue),
    // and it will be multicasted to the Observers registered to listen to the Subject.'
    this.subject.next(this.showAddTask);
  }

  get toggled(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
